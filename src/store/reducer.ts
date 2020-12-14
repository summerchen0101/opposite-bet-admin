import { MenuItem, UserInfo } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  isLogin: !!sessionStorage.getItem('isLogin'),
  language: 'zh-Hant',
  menu: [],
  user: null,
  loading: false,
}

const module = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLogout(state) {
      state.isLogin = false
      sessionStorage.remove('isLogin')
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
