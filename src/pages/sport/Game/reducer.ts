import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Game } from './API/types'
import { CountryOption } from '../Country/API/types'
import { SportOption } from '../Sport/API/types'
import { remoteOptsToLocalOpts } from '@/utils/transfer'
import { OptionsType } from '@/lib/types'
export interface IState {
  tableData: Game[]
  editData: Game
  countryOpts: OptionsType<number>
  sportOpts: OptionsType<number>
}
const initialState: IState = {
  tableData: [],
  editData: null,
  countryOpts: [],
  sportOpts: [],
}

export const moduleName = 'adminGame'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Game[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Game>) {
      state.editData = action.payload
    },
    setCountryOpts(state, action: PayloadAction<CountryOption[]>) {
      state.countryOpts = remoteOptsToLocalOpts(action.payload)
    },
    setSportOpts(state, action: PayloadAction<SportOption[]>) {
      state.sportOpts = remoteOptsToLocalOpts(action.payload)
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  setTableData,
  setEditData,
  setCountryOpts,
  setSportOpts,
} = module.actions
export default module.reducer
