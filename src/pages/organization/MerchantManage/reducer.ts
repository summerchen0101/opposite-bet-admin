import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Merchant } from './API/types'
export interface IState {
  tableData: Merchant[]
  editData: Merchant
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'Merchant'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Merchant[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Merchant>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
