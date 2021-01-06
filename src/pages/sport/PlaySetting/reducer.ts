import { OptionsType } from '@/lib/types'
import { remoteOptsToLocalOpts } from '@/utils/transfer'
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { PlayOption } from '../Play/API/types'
import { SectionOption } from '../Section/API/types'
import { PlaySetting, SearchFields } from './API/types'
export interface IState {
  tableData: PlaySetting[]
  editData: PlaySetting
  sectionOpts: OptionsType<number>
  playOpts: OptionsType<number>
  sectionId: number
  playId: number
}
const initialState: IState = {
  tableData: [],
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
      state.tableData = action.payload
    },
    setEditData(state, action: PayloadAction<PlaySetting>) {
      state.editData = action.payload
    },
    setSectionOpts(state, action: PayloadAction<SectionOption[]>) {
      state.sectionOpts = remoteOptsToLocalOpts(action.payload)
      state.sectionId = state.sectionOpts[0]?.value
    },
    setPlayOpts(state, action: PayloadAction<PlayOption[]>) {
      state.playOpts = remoteOptsToLocalOpts(action.payload)
      state.playId = state.playOpts[0]?.value
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
  setSectionOpts,
  setPlayOpts,
  setSectionId,
  setPlayId,
} = module.actions
export default module.reducer
