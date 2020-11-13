import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayCreateModal: boolean
  displayCategoryListModal: boolean
  displayCategoryCreateModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayCreateModal: false,
  displayCategoryListModal: false,
  displayCategoryCreateModal: false,
}

export const moduleName = 'faq'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload
    },
    initSearchState(state) {
      //
    },
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCreateModal = action.payload
    },
    toggleCategoryListModal(state, action: PayloadAction<boolean>) {
      state.displayCategoryListModal = action.payload
    },
    toggleCategoryCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCategoryCreateModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  toggleCategoryListModal,
  toggleCategoryCreateModal,
} = module.actions
export default module.reducer
