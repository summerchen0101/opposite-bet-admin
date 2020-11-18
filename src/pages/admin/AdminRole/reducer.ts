import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit'
import * as apis from '@/utils/apiServices'
import { AdminRole } from '@/lib/types/admin'
import { Permission } from '@/lib/types'
export interface IState {
  tableData: AdminRole.ListItem[]
  displayCreateModal: boolean
  permission: Permission
}
const initialState: IState = {
  tableData: [],
  permission: { edit: false, view: false },
  displayCreateModal: false,
}

export const moduleName = 'adminRole'

// 列表
export const getList = createAsyncThunk(
  `${moduleName}/getList`,
  (_, { dispatch }) => {
    return apis.AdminRole.getList()
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
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      const { list, permission } = action.payload
      state.tableData = list
      state.permission = permission
    })
  },
})

export const { initSearchState, toggleCreateModal } = module.actions
export default module.reducer
