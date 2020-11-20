import { AdminAccount, OptionType, Permission, ResponseBase } from '@/lib/types'
import API from '@/utils/API'
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { message } from 'antd'
import { permissionTransfer } from '@/utils/transfer'
import { errorHandler } from '@/utils/helper'

export interface IState {
  tableData: AdminAccount.ListItem[]
  roleOptions: OptionType[]
  permission: Permission
  displayCreateModal: boolean
  displayEditModal: boolean
  searchData: AdminAccount.ListSearchForm
  editAdmin: Partial<AdminAccount.DataFormProps>
}
const initialState: IState = {
  tableData: [],
  roleOptions: [],
  permission: { edit: false, view: false },
  displayCreateModal: false,
  displayEditModal: false,
  editAdmin: {},
  searchData: {
    account: '',
    role: null,
    status: 1,
    ip: '',
  },
}

export const moduleName = 'adminAccount'

// 列表
export const fetchAdminList = createAsyncThunk(
  `${moduleName}/fetchAdminList`,
  async (form: AdminAccount.ListSearchForm | void, { dispatch }) => {
    let reqData: AdminAccount.SearchRequest | undefined
    if (form) {
      reqData = {
        search_account: form.account || undefined,
        search_role: form.role ?? undefined,
        search_status: form.status ?? undefined,
        search_ip: form.ip || undefined,
      }
    }
    const { data, result } = await API.adminAccount.getList<
      ResponseBase<AdminAccount.ListResponse>
    >(reqData)
    return {
      list:
        data.admin?.map((t) => ({
          key: t.admin_id,
          id: t.admin_id,
          account: t.admin_account,
          name: t.admin_name,
          role: t.admin_role,
          lastLogin: t.last_login,
          lastIp: t.last_ip,
          status: t.status === 1,
          isOnline: false,
        })) ?? [],
      permission: permissionTransfer(data.permission),
      roleOptions: data.admin_roles.map((t) => ({
        label: t.role_name,
        value: t.id,
      })),
    }
  },
)

// 編輯
export const fetchAdminEditOptions = createAsyncThunk(
  `${moduleName}/fetchAdminEditOptions`,
  async (id: number, { dispatch }) => {
    const { result, data } = await API.adminAccount.edit<
      ResponseBase<AdminAccount.EditResponseProps>
    >(id)
    const { admin: _admin } = data
    const formData: AdminAccount.DataFormProps = {
      id,
      account: _admin.username,
      realName: _admin.name,
      pw: '',
      pw_confirm: '',
      email: _admin.admin_email,
      role: _admin.admin_role_id,
      singleLimit: +_admin.single_withdrawal_limit,
      dailyLimit: +_admin.daily_withdrawal_limit,
      effectiveTime: _admin.expire_date ? 'limit' : 'forever',
      limitDate: _admin.expire_date,
      ip: _admin.allow_ips,
      status: _admin.status,
      notes: _admin.remark,
    }
    return formData
  },
)

const formToCreateReqData = (form) => {
  const expireDate =
    form.effectiveTime === 'limit' ? form.limitDate.format('YYYY-MM-DD') : null
  const data: AdminAccount.RequestCreateData = {
    name: form.realName,
    username: form.account,
    password: form.pw,
    confirm_password: form.pw_confirm,
    admin_role_id: form.role,
    admin_email: form.email,
    single_withdrawal_limit: form.singleLimit, // 單筆提款審核上限
    daily_withdrawal_limit: form.dailyLimit, // 每日提款審核上限
    expire_date: expireDate, // 2020-11-17 or null
    allow_ips: form.ip,
    status: form.status,
    remark: form.notes,
  }
  return data
}
const formToEditReqData = (id, form) => {
  const expireDate =
    form.effectiveTime === 'limit' ? form.limitDate.format('YYYY-MM-DD') : null
  const data: AdminAccount.RequestEditData = {
    admin_id: id,
    name: form.realName,
    username: form.account,
    password: form.pw,
    confirm_password: form.pw_confirm,
    admin_role_id: form.role,
    admin_email: form.email,
    single_withdrawal_limit: form.singleLimit, // 單筆提款審核上限
    daily_withdrawal_limit: form.dailyLimit, // 每日提款審核上限
    expire_date: expireDate, // 2020-11-17 or null
    allow_ips: form.ip,
    status: form.status,
    remark: form.notes,
  }
  return data
}

// 新增送出
export const createAdmin = createAsyncThunk(
  `${moduleName}/createAdmin`,
  async (form: AdminAccount.DataFormProps, { dispatch }) => {
    const reqData = formToCreateReqData(form)
    const { result } = await API.adminAccount.doCreate<ResponseBase<any>>(
      reqData,
    )
    errorHandler(result, dispatch)
    return
  },
)

// 編輯送出
export const editAdmin = createAsyncThunk(
  `${moduleName}/editAdmin`,
  async (form: AdminAccount.DataFormProps, { dispatch, getState }) => {
    const { editAdmin } = getState()[moduleName] as IState
    const reqData = formToEditReqData(editAdmin.id, form)
    const { result } = await API.adminAccount.doEdit(reqData)
    errorHandler(result, dispatch)
    return
  },
)

// 刪除
export const removeAdmin = createAsyncThunk(
  `${moduleName}/removeAdmin`,
  async (id: number, { dispatch }) => {
    const { result } = await API.adminAccount.doDelete(id)
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
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(fetchAdminList.fulfilled, (state, action) => {
      const { list, permission, roleOptions } = action.payload
      state.tableData = list
      state.permission = permission
      state.roleOptions = roleOptions
    })
    builder.addCase(fetchAdminList.rejected, (state, action) => {
      state.tableData = []
      state.permission = { edit: false, view: false }
    })

    builder.addCase(fetchAdminEditOptions.fulfilled, (state, action) => {
      state.editAdmin = action.payload
      state.displayEditModal = true
    })
    builder.addCase(editAdmin.fulfilled, (state, action) => {
      state.displayEditModal = false
    })
    builder.addCase(createAdmin.fulfilled, (state, action) => {
      state.displayCreateModal = false
    })
    builder.addCase(removeAdmin.fulfilled, (state, action) => {
      state.tableData = state.tableData.filter((t) => t.key)
    })
  },
})

export const {
  initSearchState,
  toggleCreateModal,
  toggleEditModal,
} = module.actions
export default module.reducer
