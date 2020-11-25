import { Login, MenuItem, ResponseBase, UserInfo } from '@/types'
import * as API from '@/API'
import { errorHandler } from '@/utils/helper'
import { handleMenuTransfer } from '@/utils/transfer'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
export type TabType = {
  path: string
  label: string
}

export type GlobalState = {
  isLogin: boolean
  language: string
  menu: MenuItem[]
  user: UserInfo | null
  loading: boolean
}
const initialState: GlobalState = {
  isLogin: !!sessionStorage.getItem('token'),
  language: 'zh-Hant',
  menu: [],
  user: null,
  loading: false,
}

export const fetchUserAndMenu = createAsyncThunk(
  'global/fetchUserAndMenu',
  async (_, { dispatch }) => {
    const { result, data } = await API.fetchUserAndMenu()
    errorHandler(result, dispatch)
    const { admin, menu } = data
    return { admin, menu: handleMenuTransfer(menu) }
  },
)
export const doLogout = createAsyncThunk(
  'global/doLogout',
  async (_, { dispatch }) => {
    const { result } = await API.logout()
    errorHandler(result, dispatch)
    return
  },
)
export const doLogin = createAsyncThunk(
  'global/doLogin',
  async (reqData: Login.RequestProps, { dispatch, rejectWithValue }) => {
    const { result, data } = await API.login(reqData)
    errorHandler(result, dispatch)
    return data
  },
)

const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
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

export const { setLogout, setLanguage, toggleLoading } = module.actions
export default module.reducer
