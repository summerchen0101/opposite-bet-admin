import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import * as apis from '@/utils/apis'
import { Permission } from '@/lib/types'
import { permissionTransfer } from '@/utils/dataFactory'

interface ListItem {
  key: number
  account: string
  name: string
  role: string
  lastLogin: string
  lastIp: string
  status: boolean
  isOnline: boolean
}
export interface IState {
  tableData: ListItem[]
  permission: Permission
  displayCreateModal: boolean
}
const initialState: IState = {
  tableData: [],
  permission: { edit: false, view: false },
  displayCreateModal: false,
}

export const moduleName = 'adminAccount'

export const fetchAdminList = createAsyncThunk(
  `${moduleName}/fetchAdminList`,
  async (_, thunkAPI) => {
    const res = await apis.getAdminList()
    return res
  },
)

const module = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    gotTableData(state, action: PayloadAction<any[]>) {
      state.tableData = action.payload
    },
    initSearchState(state) {
      //
    },
    toggleCreateModal(state, action: PayloadAction<boolean>) {
      state.displayCreateModal = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminList.fulfilled, (state, action) => {
      state.tableData = action.payload.admin.map((t, i) => ({
        key: i,
        account: t.admin_account,
        name: t.admin_name,
        role: t.admin_role,
        lastLogin: t.last_login,
        lastIp: t.last_ip,
        status: t.status === 1,
        isOnline: false,
      }))
      state.permission = permissionTransfer(action.payload.permission)
    })
    builder.addCase(fetchAdminList.rejected, (state, action) => {
      state.tableData = []
      state.permission = { edit: false, view: false }
    })
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
} = module.actions
export default module.reducer
