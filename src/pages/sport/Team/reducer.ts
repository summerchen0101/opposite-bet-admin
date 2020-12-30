import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { Team } from './API/types'
import { CountryOption } from '../Country/API/types'
import { SportOption } from '../Sport/API/types'
import { remoteOptsToLocalOpts } from '@/utils/transfer'
import { OptionsType } from '@/lib/types'
import { GameOption } from '../Game/API/types'
import { LeagueOption } from '../League/API/types'
export interface IState {
  tableData: Team[]
  editData: Team
  countryOpts: OptionsType<number>
  sportOpts: OptionsType<number>
  gameOpts: OptionsType<number>
  leagueOpts: OptionsType<number>
}
const initialState: IState = {
  tableData: [],
  editData: null,
  countryOpts: [],
  sportOpts: [],
  gameOpts: [],
  leagueOpts: [],
}

export const moduleName = 'adminTeam'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<Team[]>) {
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<Team>) {
      state.editData = action.payload
    },
    setCountryOpts(state, action: PayloadAction<CountryOption[]>) {
      state.countryOpts = remoteOptsToLocalOpts(action.payload)
    },
    setSportOpts(state, action: PayloadAction<SportOption[]>) {
      state.sportOpts = remoteOptsToLocalOpts(action.payload)
    },
    setGameOpts(state, action: PayloadAction<GameOption[]>) {
      state.gameOpts = remoteOptsToLocalOpts(action.payload)
    },
    setLeagueOpts(state, action: PayloadAction<LeagueOption[]>) {
      state.leagueOpts = remoteOptsToLocalOpts(action.payload)
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
  setLeagueOpts,
} = module.actions
export default module.reducer
