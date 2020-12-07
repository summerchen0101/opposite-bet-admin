import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayReviewModal: boolean
  displayWaitingModal: boolean
  displayRejectModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayReviewModal: false,
  displayWaitingModal: false,
  displayRejectModal: false,
}

export const moduleName = 'bankDeposit'

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
    toggleReviewModal(state, action: PayloadAction<boolean>) {
      state.displayReviewModal = action.payload
    },
    toggleWaitingModal(state, action: PayloadAction<boolean>) {
      state.displayWaitingModal = action.payload
    },
    toggleRejectModal(state, action: PayloadAction<boolean>) {
      state.displayRejectModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleReviewModal,
  toggleWaitingModal,
  toggleRejectModal,
} = module.actions
export default module.reducer
