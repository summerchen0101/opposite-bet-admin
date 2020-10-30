import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GlobalState = {
  isLogin: boolean;
};
const initialState: GlobalState = {
  isLogin: false,
};

const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleLoginStatus(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const { toggleLoginStatus } = module.actions;
export default module.reducer;
