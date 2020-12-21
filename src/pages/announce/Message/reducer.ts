import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { News } from './API/types'
export interface IState {
  tableData: News[]
  editData: News
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'Message'

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
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
