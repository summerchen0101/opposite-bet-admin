import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Page } from './API/types'
export interface IState {
  tableData: Page[]
  editData: Page
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'PageManage'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Page[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Page>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
