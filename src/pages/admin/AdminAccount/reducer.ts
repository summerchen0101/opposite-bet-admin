import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit'
import * as apis from '@/utils/apis'
import { Permission } from '@/lib/types'
import { permissionTransfer } from '@/utils/dataFactory'
import { AdminAccount, OptionType } from '@/lib/types'
import { message } from 'antd'

export interface IState {
  tableData: AdminAccount.ListItem[]
  roleOptions: OptionType[]
  permission: Permission
  displayCreateModal: boolean
  displayEditModal: boolean
  searchData: AdminAccount.ListSearchForm
  editAdmin: Partial<AdminAccount.DataFormProps>
}
const initialState: IState = {
  tableData: [],
  roleOptions: [],
  permission: { edit: false, view: false },
  displayCreateModal: false,
  displayEditModal: false,
  editAdmin: {},
  searchData: {
    account: '',
    role: null,
    status: 1,
    ip: '',
  },
}

export const moduleName = 'adminAccount'

// 列表
export const fetchAdminList = createAsyncThunk(
  `${moduleName}/fetchAdminList`,
  async (form: AdminAccount.ListSearchForm, thunkAPI) => {
    const res = await apis.AdminAccount.getList(form)
    if (res.result === 'SUCCESS') {
      thunkAPI.dispatch(setRoleOptions(res.data.admin_roles))
      return res
    }
    throw res
  },
)

// 選項(新增)
export const fetchAdminCreateOptions = createAsyncThunk(
  `${moduleName}/fetchAdminCreateOptions`,
  async (_, thunkAPI) => {
    const res = await apis.AdminAccount.options()
    if (res.result === 'SUCCESS') {
      return res
    }
    throw res
  },
)

// 選項(編輯)
export const fetchAdminEditOptions = createAsyncThunk(
  `${moduleName}/fetchAdminEditOptions`,
  async (id: number, thunkAPI) => {
    return await apis.AdminAccount.get(id)
  },
)

// 新增
export const createAdmin = createAsyncThunk(
  `${moduleName}/createAdmin`,
  async (fomrData: AdminAccount.DataFormProps, thunkAPI) => {
    const res = await apis.AdminAccount.create(fomrData)
    if (res.result === 'SUCCESS') {
      thunkAPI.dispatch(fetchAdminList({}))
      return res
    }
    throw res
  },
)

// 刪除
export const removeAdmin = createAsyncThunk(
  `${moduleName}/removeAdmin`,
  async (id: number, thunkAPI) => {
    const res = await apis.AdminAccount.delete(id)
    if (res.result === 'SUCCESS') {
      thunkAPI.dispatch(fetchAdminList({}))
      return res
    }
    throw res
  },
)

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload
    },
    setRoleOptions(
      state,
      action: PayloadAction<AdminAccount.AdminRoleOption[]>,
    ) {
      state.roleOptions = action.payload.map((t) => ({
        label: t.role_name,
        value: t.id,
      }))
    },
    initSearchState(state) {
      //
    },
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCreateModal = action.payload
    },
    toggleEditModal(state, action: PayloadAction<boolean>) {
      state.displayEditModal = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(fetchAdminList.fulfilled, (state, action) => {
      const data = action.payload.data
      state.tableData =
        data.admin?.map((t, i) => ({
          key: i,
          id: t.admin_id,
          account: t.admin_account,
          name: t.admin_name,
          role: t.admin_role,
          lastLogin: t.last_login,
          lastIp: t.last_ip,
          status: t.status === 1,
          isOnline: false,
        })) || []
      state.permission = permissionTransfer(data.permission)
    })
    builder.addCase(fetchAdminList.rejected, (state, action) => {
      state.tableData = []
      state.permission = { edit: false, view: false }
    })

    builder.addCase(fetchAdminEditOptions.fulfilled, (state, action) => {
      state.editAdmin = action.payload
      state.displayEditModal = true
    })
    // builder.addCase(fetchAdminCreateOptions.rejected, (state, action) => {
    //   state.roleOptions = []
    // })
    builder.addCase(createAdmin.fulfilled, (state, action) => {
      state.displayCreateModal = false
    })
    builder.addCase(removeAdmin.fulfilled, (state, action) => {
      state.tableData = state.tableData.filter((t) => t.key)
      message.success('刪除成功')
    })
  },
})

export const {
  gotTableData,
  setRoleOptions,
  initSearchState,
  toggleCreateModal,
  toggleEditModal,
} = module.actions
export default module.reducer
