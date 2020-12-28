import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { League } from './API/types'
import { CountryOption } from '../Country/API/types'
import { SportOption } from '../Sport/API/types'
import { remoteOptsToLocalOpts } from '@/utils/transfer'
import { OptionsType } from '@/lib/types'
export interface IState {
  tableData: League[]
  editData: League
  countryOpts: OptionsType<number>
  sportOpts: OptionsType<number>
  gameOpts: OptionsType<number>
}
const initialState: IState = {
  tableData: [],
  editData: null,
  countryOpts: [],
  sportOpts: [],
  gameOpts: [],
}

export const moduleName = 'adminLeague'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<League[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<League>) {
      state.editData = action.payload
    },
    setCountryOpts(state, action: PayloadAction<CountryOption[]>) {
      state.countryOpts = remoteOptsToLocalOpts(action.payload)
    },
    setSportOpts(state, action: PayloadAction<SportOption[]>) {
      state.sportOpts = remoteOptsToLocalOpts(action.payload)
    },
    setGameOpts(state, action: PayloadAction<SportOption[]>) {
      state.gameOpts = remoteOptsToLocalOpts(action.payload)
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  setTableData,
  setEditData,
  setCountryOpts,
  setSportOpts,
  setGameOpts,
} = module.actions
export default module.reducer
