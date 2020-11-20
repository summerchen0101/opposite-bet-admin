import { ResponseBase, OrgManage, Permission } from '@/lib/types'
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import API from '@/utils/API'
import { errorHandler } from '@/utils/helper'
import { agentStructureCreator, permissionTransfer } from '@/utils/transfer'
export interface IState {
  permission: Permission
  tableData: any[]
  displayCreateModal: boolean
  displayPwModal: boolean
  displayPercentageModal: boolean
  displayWhiteListModal: boolean
  displayLoginHistoryModal: boolean
  displayTradeHistoryModal: boolean
  displayPointFormModal: boolean
}
const initialState: IState = {
  permission: null,
  tableData: [],
  displayCreateModal: false,
  displayPwModal: false,
  displayPercentageModal: false,
  displayWhiteListModal: false,
  displayLoginHistoryModal: false,
  displayTradeHistoryModal: false,
  displayPointFormModal: false,
}

export const moduleName = 'memberLabel'

// 列表
export const fetchList = createAsyncThunk(
  `${moduleName}/fetchList`,
  async (search: OrgManage.SearchRequest | void, { dispatch }) => {
    const { result, data } = await API.orgManage.getList<
      ResponseBase<OrgManage.ListResponse>
    >(search)
    errorHandler(result, dispatch)
    const pageData = {
      permission: permissionTransfer(data.permission),
      list: data.agent.map((t, i) => ({
        key: t.agent_id,
        id: t.agent_id,
        name: t.agent_name,
        account: t.agent_account,
        role: t.agent_role,
        childCount: t.lower_link,
        parent: t.upper_link,
        subAccCount: t.sub_account,
        points: t.points,
        bonus: t.bonus,
        status: t.status,
        whiteIpCount: t.allow_ip,
        memberCount: t.member_count,
        memberBalance: t.member_balance,
        failedLogin: 0,
        registerAt: '',
        lastloginAt: '',
        lastLoginIp: '',
        updatedAt: '',
        updator: '',
      })),
    }
    return pageData
  },
)

// 新增
export const fetchCreateOptions = createAsyncThunk(
  `${moduleName}/fetchCreateOptions`,
  async (_, { dispatch }) => {
    const { result, data } = await API.orgManage.create<
      ResponseBase<OrgManage.CreateOptionResponse>
    >()
    errorHandler(result, dispatch)
    return {
      agentStruct: agentStructureCreator(data.agent_struct),
    }
  },
)

// // 新增送出
// export const doCreate = createAsyncThunk(
//   `${moduleName}/doCreate`,
//   async (name: string, { getState, dispatch }) => {
//     const { menu } = getState()[moduleName] as IState
//     const reqData: AdminRole.DoCreateRequest = {
//       role_name: name,
//       menu_data: JSON.stringify(menu),
//     }
//     const { result } = await API.adminRole.doCreate<ResponseBase<any>>(reqData)
//     errorHandler(result, dispatch)
//     return
//   },
// )

// // 編輯
// export const fetchEditOptions = createAsyncThunk(
//   `${moduleName}/fetchEditOptions`,
//   async (id: number, { dispatch }) => {
//     const { result, data } = await API.adminRole.edit<
//       ResponseBase<AdminRole.DoEditResponse>
//     >(id)
//     errorHandler(result, dispatch)
//     const { role_name, role_id, menu } = data.role[0]
//     return {
//       id: role_id,
//       name: role_name,
//       menu: handleMenuTransfer(menu),
//     }
//   },
// )

// // 編輯送出
// export const doEdit = createAsyncThunk(
//   `${moduleName}/doEdit`,
//   async (name: string, { getState, dispatch }) => {
//     const { menu, editRole } = getState()[moduleName] as IState
//     const reqData: AdminRole.DoEditRequest = {
//       role_id: editRole.id,
//       role_name: name,
//       menu_data: JSON.stringify(menu),
//     }
//     const { result } = await API.adminRole.doEdit<ResponseBase<any>>(reqData)
//     errorHandler(result, dispatch)
//     return
//   },
// )

// // 刪除
// export const doDelete = createAsyncThunk(
//   `${moduleName}/doDelete`,
//   async (id: number, { dispatch }) => {
//     const { result } = await API.adminRole.doDelete<ResponseBase<any>>(id)
//     errorHandler(result, dispatch)
//     return
//   },
// )

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
    togglePwModal(state, action: PayloadAction<boolean>) {
      state.displayPwModal = action.payload
    },
    togglePercentageModal(state, action: PayloadAction<boolean>) {
      state.displayPercentageModal = action.payload
    },
    toggleWhiteListModal(state, action: PayloadAction<boolean>) {
      state.displayWhiteListModal = action.payload
    },
    toggleLoginHistoryModal(state, action: PayloadAction<boolean>) {
      state.displayLoginHistoryModal = action.payload
    },
    toggleTradeHistoryModal(state, action: PayloadAction<boolean>) {
      state.displayTradeHistoryModal = action.payload
    },
    togglePointFormModal(state, action: PayloadAction<boolean>) {
      state.displayPointFormModal = action.payload
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      const { list, permission } = action.payload
      state.tableData = list
      state.permission = permission
    })
  },
})

export const {
  gotTableData,
  initSearchState,
  toggleCreateModal,
  togglePwModal,
  togglePercentageModal,
  toggleWhiteListModal,
  toggleLoginHistoryModal,
  toggleTradeHistoryModal,
  togglePointFormModal,
} = module.actions
export default module.reducer
