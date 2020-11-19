import { Login, Permission, UserInfo } from '@/lib/types'
import * as apis from '@/utils/apiServices'
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import API from '@/utils/API'
import { toErrorMessage } from '@/utils/transfer'
export type TabType = {
  path: string
  label: string
}

interface MenuProps {
  id: string | number
  name: string
  permission: Permission
  children?: MenuProps[]
}
export type GlobalState = {
  isLogin: boolean
  tabs: TabType[]
  language: string
  menu: MenuProps[]
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
  async (_, thunkAPI) => {
    return await apis.getUserAndMenu()
  },
)
export const doLogout = createAsyncThunk(
  'global/doLogout',
  async (_, thunkAPI) => {
    return await API.logout()
  },
)
export const doLogin = createAsyncThunk(
  'global/doLogin',
  async (data: Login.RequestProps, { dispatch, rejectWithValue }) => {
    const { result, token } = await API.login<Login.ResponseProps>(data)
    if (result !== 'SUCCESS') {
      throw new Error(toErrorMessage(result))
    }
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
    toggleLoginStatus(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload
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
  toggleLoginStatus,
  addTab,
  clearTabs,
  removeTab,
  setLanguage,
  toggleLoading,
} = module.actions
export default module.reducer
