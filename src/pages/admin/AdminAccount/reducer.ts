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

// 新增送出
export const createAdmin = createAsyncThunk(
  `${moduleName}/createAdmin`,
  async (fomrData: AdminAccount.DataFormProps, { dispatch }) => {
    await apis.AdminAccount.create(fomrData)
    dispatch(fetchAdminList({}))
    return
  },
)

// 編輯
export const fetchAdminEditOptions = createAsyncThunk(
  `${moduleName}/fetchAdminEditOptions`,
  (id: number, { dispatch }) => {
    return apis.AdminAccount.getItem(id)
  },
)

// 編輯送出
export const editAdmin = createAsyncThunk(
  `${moduleName}/editAdmin`,
  async (fomrData: AdminAccount.DataFormProps, { dispatch, getState }) => {
    const state = getState()[moduleName] as IState
    await apis.AdminAccount.edit({ ...fomrData, id: state.editAdmin.id })
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
    builder.addCase(editAdmin.fulfilled, (state, action) => {
      state.displayEditModal = false
    })
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
