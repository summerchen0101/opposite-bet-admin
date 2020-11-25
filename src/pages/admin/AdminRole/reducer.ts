import { MenuItem, Permission, RequestSetStatus, ResponseBase } from '@/types'
import * as Types from './types'
import * as API from './API'
import { errorHandler } from '@/utils/helper'
import { handleMenuTransfer, permissionTransfer } from '@/utils/transfer'
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
export interface IState {
  tableData: Types.ListItem[]
  displayCreateModal: boolean
  displayEditModal: boolean
  permission: Permission
  menu: MenuItem[]
  editRole: {
    id: string
    name: string
  } | null
}
const initialState: IState = {
  tableData: [],
  permission: { edit: false, view: false },
  displayCreateModal: false,
  displayEditModal: false,
  menu: [],
  editRole: null,
}

export const moduleName = 'adminRole'

// 列表
export const fetchList = createAsyncThunk(
  `${moduleName}/fetchList`,
  async (_, { dispatch }) => {
    const { result, data } = await API.fetchAll()
    errorHandler(result, dispatch)
    const pageData = {
      permission: permissionTransfer(data.permission),
      list: data.role.map((t, i) => ({
        key: t.role_id,
        id: t.role_id,
        name: t.role_name,
        count: t.used_count,
        updatedAt: t.updated_at,
        updator: t.updator,
        createdAt: t.created_at,
        creator: t.createtor,
        menu: t.menu,
        status: t.status,
      })),
    }
    return pageData
  },
)

// 新增
export const fetchCreateOptions = createAsyncThunk(
  `${moduleName}/fetchCreateOptions`,
  async (_, { dispatch }) => {
    const { result, data } = await API.fetchCreateOption()
    errorHandler(result, dispatch)
    return handleMenuTransfer(data)
  },
)

// 新增送出
export const doCreate = createAsyncThunk(
  `${moduleName}/doCreate`,
  async (name: string, { getState, dispatch }) => {
    const { menu } = getState()[moduleName] as IState
    const reqData = {
      role_name: name,
      menu_data: JSON.stringify(menu),
    }
    const { result } = await API.create(reqData)
    errorHandler(result, dispatch)
    return
  },
)

// 編輯
export const fetchEditOptions = createAsyncThunk(
  `${moduleName}/fetchEditOptions`,
  async (id: string, { dispatch }) => {
    const { result, data } = await API.fetchById(id)
    errorHandler(result, dispatch)
    const { role_name, role_id, menu } = data.role[0]
    return {
      id: role_id,
      name: role_name,
      menu: handleMenuTransfer(menu),
    }
  },
)

// 編輯送出
export const doEdit = createAsyncThunk(
  `${moduleName}/doEdit`,
  async (name: string, { getState, dispatch }) => {
    const { menu, editRole } = getState()[moduleName] as IState
    const reqData = {
      role_name: name,
      menu_data: JSON.stringify(menu),
    }
    const { result } = await API.edit(editRole.id, reqData)
    errorHandler(result, dispatch)
    return
  },
)

// 刪除
export const doDelete = createAsyncThunk(
  `${moduleName}/doDelete`,
  async (id: string, { dispatch }) => {
    const { result } = await API.deleteById(id)
    errorHandler(result, dispatch)
    return
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
    toggleEditModal(state, action: PayloadAction<boolean>) {
      state.displayEditModal = action.payload
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
      state.menu = action.payload
      state.displayCreateModal = true
    })
    builder.addCase(fetchEditOptions.fulfilled, (state, action) => {
      const { menu, name, id } = action.payload
      state.editRole = {
        id,
        name,
      }
      state.menu = menu
      state.displayEditModal = true
    })
    builder.addCase(doCreate.fulfilled, (state, action) => {
      state.displayCreateModal = false
    })
    builder.addCase(doEdit.fulfilled, (state, action) => {
      state.displayEditModal = false
    })
  },
})

export const {
  initSearchState,
  toggleCreateModal,
  toggleEditModal,
  setMenu,
} = module.actions
export default module.reducer
