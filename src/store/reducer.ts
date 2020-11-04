import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import * as apis from '@/utils/request'
export type TabType = {
  path: string
  label: string
}
export type GlobalState = {
  isLogin: boolean
  tabs: TabType[]
  language: string
}
const initialState: GlobalState = {
  isLogin: false,
  tabs: [],
  language: 'zh-Hant',
}

// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId, thunkAPI) => {
//     const response = await apis.getUserList(userId);
//     return response.data;
//   },
// );

const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addTab(state, action: PayloadAction<TabType>) {
      state.tabs.push(action.payload)
    },
    removeTab(state, action: PayloadAction<string>) {
      state.tabs = state.tabs.filter((tab) => tab.path !== action.payload)
    },
    toggleLoginStatus(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchUserById.fulfilled, (state, action) => {
  //     // state.messages = action.payload;
  //   });
  // },
})

export const {
  toggleLoginStatus,
  addTab,
  removeTab,
  setLanguage,
} = module.actions
export default module.reducer
