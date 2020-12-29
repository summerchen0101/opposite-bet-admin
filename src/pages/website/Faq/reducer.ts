import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { FaqCategory } from './API/category/types'
import { Faq } from './API/types'
export interface IState {
  tableData: Faq[]
  editData: Faq
  categoryList: FaqCategory[]
  categoryView: FaqCategory
}
const initialState: IState = {
  tableData: [],
  editData: null,
  categoryList: [],
  categoryView: null,
}

export const moduleName = 'faq'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Faq[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Faq>) {
      state.editData = action.payload
    },
    setCategoryList(state, action: PayloadAction<FaqCategory[]>) {
      state.categoryList = action.payload
    },
    setCategoryView(state, action: PayloadAction<FaqCategory>) {
      state.categoryView = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  setTableData,
  setEditData,
  setCategoryList,
  setCategoryView,
} = module.actions
export default module.reducer
