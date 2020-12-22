import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Activity } from './API/types'
export interface IState {
  tableData: Activity[]
  editData: Activity
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'PromoteActivity'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Activity[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Activity>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
