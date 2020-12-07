import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayDepositModal: boolean
  displayWithdrawalModal: boolean
  displayLoginCountModal: boolean
  displayRegisterCountModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayDepositModal: false,
  displayWithdrawalModal: false,
  displayLoginCountModal: false,
  displayRegisterCountModal: false,
}

export const moduleName = 'memberActivity'

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
    toggleDepositModal(state, action: PayloadAction<boolean>) {
      state.displayDepositModal = action.payload
    },
    toggleWithdrawalModal(state, action: PayloadAction<boolean>) {
      state.displayWithdrawalModal = action.payload
    },
    toggleLoginCountModal(state, action: PayloadAction<boolean>) {
      state.displayLoginCountModal = action.payload
    },
    toggleRegisterCountModal(state, action: PayloadAction<boolean>) {
      state.displayRegisterCountModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleDepositModal,
  toggleWithdrawalModal,
  toggleLoginCountModal,
  toggleRegisterCountModal,
} = module.actions
export default module.reducer
