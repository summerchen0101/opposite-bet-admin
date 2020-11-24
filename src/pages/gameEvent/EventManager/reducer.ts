import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TableItem } from './types'
const data: TableItem[] = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    id: i.toString(),
    eventId: 3123,
    startAt: '2020-12-02',
    teams: ['AAA', 'BBB'],
    league: '大聯盟123',
    country: '美國',
    count: 10,
    volume: 20320,
    isOpened: true,
    // result: {
    //   full: '3:2',
    //   firstHalf: '2:1',
    // },
  })
}
export interface IState {
  tableData: TableItem[]
  displayCreateModal: boolean
  displayScoreModal: boolean
}
const initialState: IState = {
  tableData: data,
  displayCreateModal: false,
  displayScoreModal: false,
}

export const moduleName = 'eventManager'

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
    toggleScoreModal(state, action: PayloadAction<boolean>) {
      state.displayScoreModal = action.payload
    },
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  toggleScoreModal,
} = module.actions
export default module.reducer
