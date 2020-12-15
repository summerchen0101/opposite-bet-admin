import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Role } from './API/fetchAll'
import { Permission } from '@/API/permission/options'
export interface IState {
  tableData: Role[]
  permissionOpts: Permission[]
}
const initialState: IState = {
  tableData: [],
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
    setPermissionOpts(state, action: PayloadAction<Permission[]>) {
      state.permissionOpts = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setPermissionOpts } = module.actions
export default module.reducer
