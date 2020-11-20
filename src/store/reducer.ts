import { Login, MenuItem, ResponseBase, UserInfo } from '@/lib/types'
import API from '@/utils/API'
import { errorHandler } from '@/utils/helper'
import { handleMenuTransfer } from '@/utils/transfer'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
export type TabType = {
  path: string
  label: string
}

export type GlobalState = {
  isLogin: boolean
  tabs: TabType[]
  language: string
  menu: MenuItem[]
  user: UserInfo | null
  loading: boolean
}
const initialState: GlobalState = {
  isLogin: !!sessionStorage.getItem('token'),
  tabs: [],
  language: 'zh-Hant',
  menu: [],
  user: null,
  loading: false,
}

export const fetchUserAndMenu = createAsyncThunk(
  'global/fetchUserAndMenu',
  async (_, { dispatch }) => {
    const { result, data } = await API.getUserAndMenu<
      ResponseBase<{
        admin: UserInfo
        menu: any
      }>
    >()
    errorHandler(result, dispatch)
    const { admin, menu } = data
    return { admin, menu: handleMenuTransfer(menu) }
  },
)
export const doLogout = createAsyncThunk(
  'global/doLogout',
  async (_, { dispatch }) => {
    const { result } = await API.logout<ResponseBase<any>>()
    errorHandler(result, dispatch)
    return
  },
)
export const doLogin = createAsyncThunk(
  'global/doLogin',
  async (data: Login.RequestProps, { dispatch, rejectWithValue }) => {
    const { result, token } = await API.login<Login.ResponseProps>(data)
    errorHandler(result, dispatch)
    return token
  },
)

const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addTab(state, action: PayloadAction<TabType>) {
      if (state.tabs.findIndex((t) => t.path === action.payload.path) > -1) {
        return
      }
      state.tabs.push(action.payload)
    },
    removeTab(state, action: PayloadAction<string>) {
      state.tabs = state.tabs.filter((tab) => tab.path !== action.payload)
    },
    clearTabs(state, action: PayloadAction<string>) {
      const i = state.tabs.findIndex((t) => t.path === action.payload)
      state.tabs = i > -1 ? [state.tabs[i]] : []
    },
    setLogout(state) {
      state.isLogin = false
      sessionStorage.removeItem('token')
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
    toggleLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserAndMenu.fulfilled, (state, action) => {
      const { admin, menu } = action.payload
      state.user = admin
      state.menu = menu
    })
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.isLogin = true
      sessionStorage.setItem('token', action.payload)
    })
    builder.addCase(doLogout.fulfilled, (state, action) => {
      state.isLogin = false
      sessionStorage.removeItem('token')
    })
  },
})

export const {
  setLogout,
  addTab,
  clearTabs,
  removeTab,
  setLanguage,
  toggleLoading,
} = module.actions
export default module.reducer
