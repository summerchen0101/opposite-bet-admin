import { OptionsType } from '@/lib/types'
import { remoteOptsToLocalOpts } from '@/utils/transfer'
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { BlackIp } from './API/types'
export interface IState {
  tableData: BlackIp[]
  editData: BlackIp
  sectionOpts: OptionsType<number>
  playOpts: OptionsType<number>
}
const initialState: IState = {
  tableData: [],
  editData: null,
  sectionOpts: [],
  playOpts: [],
}

export const moduleName = 'CheckoutEvents'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<BlackIp[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<BlackIp>) {
      state.editData = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData } = module.actions
export default module.reducer
