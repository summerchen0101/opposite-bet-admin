import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { MemberTag } from './API/types'
export interface IState {
  tableData: MemberTag[]
  editData: MemberTag
}
const initialState: IState = {
  tableData: [],
  editData: null,
}

export const moduleName = 'MemberTag'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<MemberTag[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<MemberTag>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
