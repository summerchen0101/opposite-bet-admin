import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayCreateModal: boolean
  displayPwModal: boolean
  displayPercentageModal: boolean
  displayWhiteListModal: boolean
  displayLoginHistoryModal: boolean
  displayTradeHistoryModal: boolean
  displayPointFormModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayCreateModal: false,
  displayPwModal: false,
  displayPercentageModal: false,
  displayWhiteListModal: false,
  displayLoginHistoryModal: false,
  displayTradeHistoryModal: false,
  displayPointFormModal: false,
}

export const moduleName = 'memberLabel'

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
    togglePwModal(state, action: PayloadAction<boolean>) {
      state.displayPwModal = action.payload
    },
    togglePercentageModal(state, action: PayloadAction<boolean>) {
      state.displayPercentageModal = action.payload
    },
    toggleWhiteListModal(state, action: PayloadAction<boolean>) {
      state.displayWhiteListModal = action.payload
    },
    toggleLoginHistoryModal(state, action: PayloadAction<boolean>) {
      state.displayLoginHistoryModal = action.payload
    },
    toggleTradeHistoryModal(state, action: PayloadAction<boolean>) {
      state.displayTradeHistoryModal = action.payload
    },
    togglePointFormModal(state, action: PayloadAction<boolean>) {
      state.displayPointFormModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  togglePwModal,
  togglePercentageModal,
  toggleWhiteListModal,
  toggleLoginHistoryModal,
  toggleTradeHistoryModal,
  togglePointFormModal,
} = module.actions
export default module.reducer
