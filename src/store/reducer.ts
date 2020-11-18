import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import * as apis from '@/utils/apis'
import { LoginFormData, Permission } from '@/lib/types'
import { permissionTransfer } from '@/utils/dataFactory'
import { message } from 'antd'
export type TabType = {
  path: string
  label: string
}
interface UserProps {
  name: string
  role: string
}

interface RootMenuProps {
  id: string | number
  name: string
  children?: MenuProps[]
}
interface MenuProps {
  id: string | number
  name: string
  permission: Permission
}
export type GlobalState = {
  isLogin: boolean
  tabs: TabType[]
  language: string
  menu: RootMenuProps[]
  user: UserProps | null
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
    const res = await apis.getUserInfo()
    if (res.result === 'SUCCESS') {
      return res.data
    }
    throw res
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
      state.isLogin = true
      state.user = action.payload.admin as UserProps
      for (const rootId in action.payload.menu) {
        const { root, sub } = action.payload.menu[rootId]
        const children = []
        for (const subId in sub) {
          const { name, url, permission } = sub[subId]
          children.push({
            id: subId,
            name,
            permission: permissionTransfer(permission),
          })
        }
        state.menu.push({
          id: rootId,
          name: root.name,
          children,
        })
      }
    })
    builder.addCase(fetchUserAndMenu.rejected, (state, action) => {
      sessionStorage.removeItem('token')
      state.isLogin = false
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
