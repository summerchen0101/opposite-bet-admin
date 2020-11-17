import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import * as apis from '@/utils/apis'
export interface IState {
  tableData: any[]
  displayCreateModal: boolean
}
const initialState: IState = {
  tableData: [],
  displayCreateModal: false,
}

export const moduleName = 'adminAccount'

export const fetchAdminList = createAsyncThunk(
  `${moduleName}/fetchAdminList`,
  async (_, thunkAPI) => {
    const res = await apis.getAdminList()
    if (res.result === 'SUCCESS') {
      return res.data
    }
    throw res
  },
)

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
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
} = module.actions
export default module.reducer
