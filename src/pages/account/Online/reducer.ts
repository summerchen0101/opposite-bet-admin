import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type OnlineState = {
  searchRole: string;
  tableData: any[];
  roleOptions: any[];
};
const initialState: OnlineState = {
  searchRole: undefined,
  tableData: [],
  roleOptions: [],
};

const module = createSlice({
  name: 'online',
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload;
    },
    changeRoleSearch(state, action: PayloadAction<string>) {
      state.searchRole = action.payload;
    },
    gotRoleOptions(state, action: PayloadAction<any[]>) {
      state.roleOptions = action.payload;
    },
    initSearchState(state) {
      state.searchRole = undefined;
    },
  },
});

export const {
  gotTableData,
  changeRoleSearch,
  gotRoleOptions,
  initSearchState,
} = module.actions;
export default module.reducer;
