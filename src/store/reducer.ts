import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type TabType = {
  path: string;
  label: string;
};
export type GlobalState = {
  isLogin: boolean;
  tabs: TabType[];
};
const initialState: GlobalState = {
  isLogin: false,
  tabs: [],
};

const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addTab(state, action: PayloadAction<TabType>) {
      state.tabs.push(action.payload);
    },
    removeTab(state, action: PayloadAction<string>) {
      state.tabs = state.tabs.filter((tab) => tab.path !== action.payload);
    },
    toggleLoginStatus(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const { toggleLoginStatus, addTab, removeTab } = module.actions;
export default module.reducer;
