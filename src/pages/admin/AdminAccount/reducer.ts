import { AdminAccount, OptionType, Permission } from '@/lib/types'
import * as apis from '@/utils/apiServices'
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
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
  (form: AdminAccount.ListSearchForm, { dispatch }) => {
    return apis.AdminAccount.getList(form)
  },
)

// 選項(編輯)
export const fetchAdminEditOptions = createAsyncThunk(
  `${moduleName}/fetchAdminEditOptions`,
  async (id: number, { dispatch }) => {
    return await apis.AdminAccount.getItem(id)
  },
)

// 新增
export const createAdmin = createAsyncThunk(
  `${moduleName}/createAdmin`,
  async (fomrData: AdminAccount.DataFormProps, { dispatch }) => {
    await apis.AdminAccount.create(fomrData)
    dispatch(fetchAdminList({}))
    return
  },
)
// 編輯
export const editAdmin = createAsyncThunk(
  `${moduleName}/editAdmin`,
  async (fomrData: AdminAccount.DataFormProps, { dispatch, ...options }) => {
    console.log(options.getState())
    await apis.AdminAccount.edit({ ...fomrData, id: 9 })
    dispatch(fetchAdminList({}))
    return
  },
)

// 刪除
export const removeAdmin = createAsyncThunk(
  `${moduleName}/removeAdmin`,
  async (id: number, { dispatch }) => {
    await apis.AdminAccount.delete(id)
    message.success('刪除成功')
    dispatch(fetchAdminList({}))
    return
  },
)

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
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
      const { list, permission, roleOptions } = action.payload
      state.tableData = list
      state.permission = permission
      state.roleOptions = roleOptions
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
    })
  },
})

export const {
  initSearchState,
  toggleCreateModal,
  toggleEditModal,
} = module.actions
export default module.reducer
