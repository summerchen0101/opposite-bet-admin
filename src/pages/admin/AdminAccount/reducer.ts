import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { User } from './API/types'
import { Permission } from '@/API/permission/options'
import { Role } from '../AdminRole/API/options'
export interface IState {
  tableData: User[]
  editData: User
  editId: number
  permissionOpts: Permission[]
  roleOpts: Role[]
}
const initialState: IState = {
  tableData: [],
  editData: null,
  editId: null,
  permissionOpts: [],
  roleOpts: [],
}

export const moduleName = 'adminAccount'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<User[]>) {
      state.tableData = action.payload
    },
    setEditId(state, action: PayloadAction<number>) {
      state.editId = action.payload
    },
    setEditData(state, action: PayloadAction<User>) {
      state.editData = action.payload
    },
    setPermissionOpts(state, action: PayloadAction<Permission[]>) {
      state.permissionOpts = action.payload
    },
    setRoleOpts(state, action: PayloadAction<Role[]>) {
      state.roleOpts = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  setTableData,
  setPermissionOpts,
  setEditData,
  setRoleOpts,
  setEditId,
} = module.actions
export default module.reducer
