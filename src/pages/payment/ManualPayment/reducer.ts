import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayCreateModal: boolean
  displayBatchCreateModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayCreateModal: false,
  displayBatchCreateModal: false,
}

export const moduleName = 'manualPayment'

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
    toggleBatchCreateModal(state, action: PayloadAction<boolean>) {
      state.displayBatchCreateModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  toggleBatchCreateModal,
} = module.actions
export default module.reducer
