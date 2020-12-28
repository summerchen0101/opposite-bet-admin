import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Banner } from './API/types'
export interface IState {
  tableData: Banner[]
  editData: Banner
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'Carousel'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Banner[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Banner>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
