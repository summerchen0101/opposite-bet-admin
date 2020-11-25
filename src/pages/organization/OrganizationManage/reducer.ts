import { ResponseBase, Permission, OptionType } from '@/types'
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import * as API from './API'
import * as Types from './types'
import { errorHandler } from '@/utils/helper'
import { permissionTransfer } from '@/utils/transfer'
import { SearchRequest } from './API/fetchAll'
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
  agentStruct: Types.AgentItem[]
  roleOptions: OptionType[]
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
  agentStruct: [],
  roleOptions: [],
}

export const moduleName = 'orgManage'

// 列表
export const fetchList = createAsyncThunk(
  `${moduleName}/fetchList`,
  async (search: SearchRequest | void, { dispatch }) => {
    const { result, data } = await API.fetchAll(search || undefined)
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
        updatedAt: t.updated_at,
        updator: t.updated_by,
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
    return {
      agentStruct: agentStructureCreator(data.agent_struct),
      roleOption: data.admin_roles.map((t) => ({
        label: t.role_name,
        value: t.id,
      })),
    }
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
    builder.addCase(fetchCreateOptions.fulfilled, (state, action) => {
      const { agentStruct, roleOption } = action.payload
      state.agentStruct = agentStruct
      state.roleOptions = roleOption
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

function agentStructureCreator(
  obj: Types.RemoteAgent,
  level = 0,
): Types.AgentItem[] {
  const levelMap = {
    0: '廠商',
    1: '股東',
    2: '總代',
    3: '代理',
    4: '會員',
  }
  const levelItem = {
    label: levelMap[level],
    value: 0,
    disabled: true,
  }
  const items = Object.keys(obj).map((key) => {
    const name = obj[key].NAME as string
    delete obj[key].NAME
    const item: Types.AgentItem = {
      value: (key as unknown) as number,
      label: name,
    }
    if (Object.keys(obj[key]).length > 0) {
      item.children = agentStructureCreator(obj[key], ++level)
    }
    return item
  })

  return [levelItem, ...items]
}
