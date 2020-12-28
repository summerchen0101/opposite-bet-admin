import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Sport } from './API/types'
import { CountryOptions } from '../Country/API/types'
import { remoteOptsToLocalOpts } from '@/utils/transfer'
import { OptionsType } from '@/lib/types'
export interface IState {
  tableData: Sport[]
  editData: Sport
  countryOpts: OptionsType<number>
}
const initialState: IState = {
  tableData: [],
  editData: null,
  countryOpts: [],
}

export const moduleName = 'adminSport'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Sport[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Sport>) {
      state.editData = action.payload
    },
    setCountryOpts(state, action: PayloadAction<CountryOptions[]>) {
      state.countryOpts = remoteOptsToLocalOpts(action.payload)
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const { setTableData, setEditData, setCountryOpts } = module.actions
export default module.reducer
