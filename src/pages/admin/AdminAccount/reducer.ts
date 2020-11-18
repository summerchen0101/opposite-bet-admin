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
  searchData: AdminAccount.ListSearchForm
}
const initialState: IState = {
  tableData: [],
  roleOptions: [],
  permission: { edit: false, view: false },
  displayCreateModal: false,
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

// 新增
export const createAdmin = createAsyncThunk(
  `${moduleName}/createAdmin`,
  async (fomrData: AdminAccount.CreateFormProps, thunkAPI) => {
    const res = await apis.AdminAccount.create(fomrData)
    console.log(res)
    if (res.result === 'SUCCESS') {
      thunkAPI.dispatch(fetchAdminList({}))
      console.log('success')
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
    setSearchAccount(state, action: PayloadAction<string>) {
      state.searchData.account = action.payload
    },
    setSearchIp(state, action: PayloadAction<string>) {
      state.searchData.ip = action.payload
    },
    setSearchRole(state, action: PayloadAction<string>) {
      state.searchData.role = action.payload
    },
    setSearchStatus(
      state,
      action: PayloadAction<AdminAccount.AdminStatusOptions>,
    ) {
      state.searchData.status = action.payload
    },
    initSearchState(state) {
      //
    },
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCreateModal = action.payload
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

    builder.addCase(fetchAdminCreateOptions.fulfilled, (state, action) => {
      state.roleOptions = action.payload.data.admin_roles.map((t) => ({
        label: t.role_name,
        value: t.id,
      }))
    })
    builder.addCase(fetchAdminCreateOptions.rejected, (state, action) => {
      state.roleOptions = []
    })
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
  setSearchAccount,
  setSearchIp,
  setSearchRole,
  setRoleOptions,
  setSearchStatus,
  initSearchState,
  toggleCreateModal,
} = module.actions
export default module.reducer
