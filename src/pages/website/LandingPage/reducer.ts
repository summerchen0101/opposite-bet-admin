import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayCreateModal: boolean
  displaySecondSettingModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayCreateModal: false,
  displaySecondSettingModal: false,
}

export const moduleName = 'landingPage'

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
    toggleSecondSettingModal(state, action: PayloadAction<boolean>) {
      state.displaySecondSettingModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  toggleSecondSettingModal,
} = module.actions
export default module.reducer
