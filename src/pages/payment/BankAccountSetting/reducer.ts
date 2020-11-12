import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayCreateModal: boolean
  displayBankListModal: boolean
  displayBankCreateModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayCreateModal: false,
  displayBankListModal: false,
  displayBankCreateModal: false,
}

export const moduleName = 'bankAccountSetting'

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
    toggleBankListModal(state, action: PayloadAction<boolean>) {
      state.displayBankListModal = action.payload
    },
    toggleBankCreateModal(state, action: PayloadAction<boolean>) {
      state.displayBankCreateModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  toggleBankListModal,
  toggleBankCreateModal,
} = module.actions
export default module.reducer
