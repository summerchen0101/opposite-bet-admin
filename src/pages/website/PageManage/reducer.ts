import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  tableData: any[]
  displayEditModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayEditModal: false,
}

export const moduleName = 'pageManage'

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
    toggleEditModal(state, action: PayloadAction<boolean>) {
      state.displayEditModal = action.payload
    },
  },
})

export const { gotTableData, initSearchState, toggleEditModal } = module.actions
export default module.reducer
