import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Role } from './API/types'
import { Permission } from '@/API/permission/types'
export interface IState {
  tableData: Role[]
  editData: Role
  permissionOpts: Permission[]
}
const initialState: IState = {
  tableData: [],
  editData: null,
  permissionOpts: [],
}

export const moduleName = 'adminRole'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Role[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Role>) {
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
