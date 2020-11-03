import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
  tableData: any[];
  displayCreateModal: boolean;
  displayScoreModal: boolean;
}
const initialState: IState = {
  tableData: [],
  displayCreateModal: false,
  displayScoreModal: false,
};

export const moduleName = 'eventManager';

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
    initSearchState(state) {
      //
    },
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCreateModal = action.payload;
    },
    toggleScoreModal(state, action: PayloadAction<boolean>) {
      state.displayScoreModal = action.payload;
    },
  },
});

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  toggleScoreModal,
} = module.actions;
export default module.reducer;
