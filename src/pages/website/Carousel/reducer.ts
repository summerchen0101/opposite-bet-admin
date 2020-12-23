import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Marquee } from './API/types'
export interface IState {
  tableData: Marquee[]
  editData: Marquee
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
    setTableData(state, action: PayloadAction<Marquee[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Marquee>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
