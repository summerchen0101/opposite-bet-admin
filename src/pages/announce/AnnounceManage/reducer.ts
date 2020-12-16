import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { News } from './API/types'
import { Permission } from '@/API/permission/options'
export interface IState {
  tableData: News[]
  editData: News
  permissionOpts: Permission[]
}
const initialState: IState = {
  tableData: [],
  editData: null,
  permissionOpts: [],
}

export const moduleName = 'annouceManage'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<News[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<News>) {
      state.editData = action.payload
    },
    setPermissionOpts(state, action: PayloadAction<Permission[]>) {
      state.permissionOpts = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setPermissionOpts, setEditData } = module.actions
export default module.reducer
