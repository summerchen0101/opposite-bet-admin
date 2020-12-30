import { OptionsType } from '@/lib/types'
import { remoteOptsToLocalOpts } from '@/utils/transfer'
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { PlayOption } from '../Play/API/types'
import { SectionOption } from '../Section/API/types'
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

export const moduleName = 'PlaySetting'

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
    setSectionOpts(state, action: PayloadAction<SectionOption[]>) {
      state.sectionOpts = remoteOptsToLocalOpts(action.payload)
    },
    setPlayOpts(state, action: PayloadAction<PlayOption[]>) {
      state.playOpts = remoteOptsToLocalOpts(action.payload)
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  setTableData,
  setEditData,
  setSectionOpts,
  setPlayOpts,
} = module.actions
export default module.reducer
