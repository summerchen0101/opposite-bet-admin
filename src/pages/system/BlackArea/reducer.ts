import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { BlackArea } from './API/types'
export interface IState {
  tableData: BlackArea[]
  editData: BlackArea
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'BlackArea'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<BlackArea[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<BlackArea>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
