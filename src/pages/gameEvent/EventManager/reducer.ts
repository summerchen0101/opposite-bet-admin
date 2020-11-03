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
    toggleUpdateModal(state, action: PayloadAction<boolean>) {
      state.displayScoreModal = action.payload;
    },
  },
});

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  toggleUpdateModal,
} = module.actions;
export default module.reducer;
