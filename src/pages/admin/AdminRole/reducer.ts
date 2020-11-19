import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit'
import * as apis from '@/utils/apiServices'
import { AdminRole } from '@/lib/types/admin'
import { Permission, MenuItem } from '@/lib/types'
export interface IState {
  tableData: AdminRole.ListItem[]
  displayCreateModal: boolean
  permission: Permission
  menu: MenuItem[]
}
const initialState: IState = {
  tableData: [],
  permission: { edit: false, view: false },
  displayCreateModal: false,
  menu: [],
}

export const moduleName = 'adminRole'

// 列表
export const fetchList = createAsyncThunk(
  `${moduleName}/fetchList`,
  (_, { dispatch }) => {
    return apis.AdminRole.getList()
  },
)

// 新增(撈選項)
export const fetchCreateOptions = createAsyncThunk(
  `${moduleName}/fetchCreateOptions`,
  (_, { dispatch }) => {
    return apis.AdminRole.create()
  },
)

// 新增
export const doCreate = createAsyncThunk(
  `${moduleName}/doCreate`,
  (name: string, { getState }) => {
    const state = getState()[moduleName] as IState
    return apis.AdminRole.doCreate({ name, menu: state.menu })
  },
)

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    initSearchState(state) {
      //
    },
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCreateModal = action.payload
    },
    setMenu(
      state,
      action: PayloadAction<{
        id: number
        permission: Permission
        parent: number
      }>,
    ) {
      const { id, permission, parent } = action.payload
      let currentIndex = null
      if (parent) {
        const parentIndex = state.menu.findIndex((t) => t.id == parent)
        currentIndex = state.menu[parentIndex].children.findIndex(
          (t) => t.id == id,
        )
        state.menu[parentIndex].children[currentIndex].permission = permission
      } else {
        currentIndex = state.menu.findIndex((t) => t.id == id)
        state.menu[currentIndex].permission = permission
      }
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      const { list, permission } = action.payload
      state.tableData = list
      state.permission = permission
    })
    builder.addCase(fetchCreateOptions.fulfilled, (state, action) => {
      const { menu } = action.payload
      state.menu = menu
      state.displayCreateModal = true
    })
  },
})

export const { initSearchState, toggleCreateModal, setMenu } = module.actions
export default module.reducer
