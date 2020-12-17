import { MenuItem } from '@/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type TabType = {
  path: string
  label: string
}

export type GlobalState = {
  isLogin: boolean
  language: string
  menu: MenuItem[]
  loading: boolean
}
const initialState: GlobalState = {
  isLogin: !!sessionStorage.getItem('isLogin'),
  language: 'zh-Hant',
  menu: [],
  loading: false,
}

const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLogout(state) {
      state.isLogin = false
      sessionStorage.removeItem('isLogin')
    },
    setLogin(state) {
      state.isLogin = true
      sessionStorage.setItem('isLogin', 'yes')
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
    toggleLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const {
  setLogout,
  setLogin,
  setLanguage,
  toggleLoading,
} = module.actions
export default module.reducer
