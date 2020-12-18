import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Menu } from './API/types'
import { Permission } from '@/API/permission/types'
import { RoleOption } from '../AdminRole/API/types'
import { OptionsType } from '@/lib/types'
export interface IState {
  tableData: Menu[]
  editData: Menu
  permissionOpts: OptionsType<number>
  roleOpts: OptionsType<number>
}
const initialState: IState = {
  tableData: [],
  editData: null,
  permissionOpts: [],
  roleOpts: [],
}

export const moduleName = 'menuManage'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Menu[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Menu>) {
      state.editData = action.payload
    },
    setPermissionOpts(state, action: PayloadAction<Permission[]>) {
      state.permissionOpts = action.payload.map((t) => ({
        label: t.name,
        value: t.id,
      }))
    },
    setRoleOpts(state, action: PayloadAction<RoleOption[]>) {
      state.roleOpts = action.payload.map((t) => ({
        label: t.name,
        value: t.id,
      }))
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  setTableData,
  setPermissionOpts,
  setEditData,
  setRoleOpts,
} = module.actions
export default module.reducer
