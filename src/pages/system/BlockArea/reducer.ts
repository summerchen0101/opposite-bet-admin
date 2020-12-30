import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { BlockArea } from './API/types'
export interface IState {
  tableData: BlockArea[]
  editData: BlockArea
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'BlockArea'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<BlockArea[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<BlockArea>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
