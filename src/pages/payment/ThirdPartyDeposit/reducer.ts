import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayReviewModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayReviewModal: false,
}

export const moduleName = 'thirdPartyDeposit'

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
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleReviewModal,
} = module.actions
export default module.reducer
