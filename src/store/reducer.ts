import { MenuItem, ResponseBase, UserInfo } from '@/types'
import * as API from '@/API'
import { handleMenuTransfer } from '@/utils/transfer'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import mockAPI from '@/utils/mock'
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
  isLogin: false,
  language: 'zh-Hant',
  menu: [],
  user: null,
  loading: false,
}

export const fetchUserAndMenu = createAsyncThunk(
  'global/fetchUserAndMenu',
  async (_, { dispatch }) => {
    const { result, data } = await mockAPI.fetchUserAndMenu()
    const { admin, menu } = data
    return { admin, menu: handleMenuTransfer(menu) }
  },
)
export const doLogout = createAsyncThunk(
  'global/doLogout',
  async (_, { dispatch }) => {
    const { result } = await mockAPI.logout()
    return
  },
)
const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLogout(state) {
      state.isLogin = false
    },
    setLogin(state) {
      state.isLogin = true
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
    builder.addCase(doLogout.fulfilled, (state, action) => {
      state.isLogin = false
      sessionStorage.removeItem('token')
    })
  },
})

export const {
  setLogout,
  setLogin,
  setLanguage,
  toggleLoading,
} = module.actions
export default module.reducer
