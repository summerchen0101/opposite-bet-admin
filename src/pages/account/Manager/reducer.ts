import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ManagerState = {
  searchRole: string;
  searchStatus: string;
  searchKeyword: string;
  tableData: any[];
  roleOptions: any[];
  displayCreateModal: boolean;
  displayUpdateModal: boolean;
};
const initialState: ManagerState = {
  searchRole: undefined,
  searchStatus: undefined,
  searchKeyword: '',
  tableData: [],
  roleOptions: [],
  displayCreateModal: false,
  displayUpdateModal: false,
};

const module = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
    changeRoleSearch(state, action: PayloadAction<string>) {
      state.searchRole = action.payload;
    },
    changeStatusSearch(state, action: PayloadAction<string>) {
      state.searchStatus = action.payload;
    },
    changeKeywordSearch(state, action: PayloadAction<string>) {
      state.searchKeyword = action.payload;
    },
    gotRoleOptions(state, action: PayloadAction<any[]>) {
      state.roleOptions = action.payload;
    },
    initSearchState(state) {
      state.searchRole = undefined;
      state.searchStatus = undefined;
      state.searchKeyword = '';
    },
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCreateModal = action.payload;
    },
    toggleUpdateModal(state, action: PayloadAction<boolean>) {
      state.displayUpdateModal = action.payload;
    },
  },
});

export const {
  gotTableData,
  changeRoleSearch,
  changeStatusSearch,
  changeKeywordSearch,
  initSearchState,
  gotRoleOptions,
  toggleCreateModal,
  toggleUpdateModal,
} = module.actions;
export default module.reducer;
