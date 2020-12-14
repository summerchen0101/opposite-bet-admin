import { MenuItem, Permission } from '@/types'
import {
  addKeyToArrayItem,
  handleMenuTransfer,
  permissionTransfer,
} from '@/utils/transfer'
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import * as API from './API'
import { TableItem } from './containers/TableData'
export interface IState {
  tableData: TableItem[]
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
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {},
})

export const {
  initSearchState,
  toggleCreateModal,
  toggleEditModal,
  setMenu,
} = module.actions
export default module.reducer
