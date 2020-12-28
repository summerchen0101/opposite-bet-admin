import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Play } from './API/types'
import { Permission } from '@/API/permission/types'
export interface IState {
  tableData: Play[]
  editData: Play
  // permissionOpts: Permission[]
}
const initialState: IState = {
  tableData: [],
  editData: null,
  // permissionOpts: [],
}

export const moduleName = 'adminPlay'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Play[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Play>) {
      state.editData = action.payload
    },
    // setPermissionOpts(state, action: PayloadAction<Permission[]>) {
    //   state.permissionOpts = action.payload
    // },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
