import { OptionsType } from '@/lib/types'
import { checkWinSide, remoteOptsToLocalOpts } from '@/utils/transfer'
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { PlaySetting, SearchFields } from './API/types'
import _ from 'lodash'
export interface IState {
  tableData: Record<string, PlaySetting[]>
  editData: PlaySetting
  sectionOpts: OptionsType<number>
  playOpts: OptionsType<number>
  sectionId: number
  playId: number
}
const initialState: IState = {
  tableData: {},
  editData: null,
  sectionOpts: [],
  playOpts: [],
  sectionId: null,
  playId: null,
}

export const moduleName = 'PlaySetting'

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<PlaySetting[]>) {
      const _data = _(action.payload)
        .sortBy(['home_score', 'away_score'])
        .groupBy((t) => checkWinSide(t.home_score, t.away_score))
        .value()
      state.tableData = _data
    },
    setEditData(state, action: PayloadAction<PlaySetting>) {
      state.editData = action.payload
    },
    setSectionId(state, action: PayloadAction<number>) {
      state.sectionId = action.payload
    },
    setPlayId(state, action: PayloadAction<number>) {
      state.playId = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  setTableData,
  setEditData,
  setSectionId,
  setPlayId,
} = module.actions
export default module.reducer
