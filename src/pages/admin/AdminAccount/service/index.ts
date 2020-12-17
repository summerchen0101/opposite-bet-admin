import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { SearchFields, BlockStatus } from '../API/types'
import { Request as CreateRequest } from '../API/create'
import {
  setEditData,
  setTableData,
  setPermissionOpts,
  setRoleOpts,
} from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getOptions = async () => {
    try {
      const [p_res, r_res] = await Promise.all([
        API.permission.options(),
        API.adminRole.options(),
      ])
      dispatch(setPermissionOpts(p_res.data.permissions))
      dispatch(setRoleOpts(r_res.data.roles))
    } catch (err) {
      apiErr(err)
    }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.adminAccount.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: SearchFields) => {
    try {
      const res = await API.adminAccount.fetchAll(search)
      dispatch(setTableData(res.data.users))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async function (values: CreateRequest) {
    try {
      await API.adminAccount.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values) => {
    try {
      await API.adminAccount.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.adminAccount.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.adminAccount.active({ id, is_active: status })
      await getTableData()
      message.success('啟用狀態更新成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeStatus = async (id: number, status: BlockStatus) => {
    try {
      await API.adminAccount.status({ id, status })
      await getTableData()
      message.success('鎖定狀態更新成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changePassword = async (id: number, pass: string) => {
    try {
      await API.adminAccount.pass({ id, pass })
      message.success('密碼更新成功')
    } catch (err) {
      apiErr(err)
    }
  }

  return {
    getTableData,
    onCreate,
    onEdit,
    getFormData,
    getOptions,
    onDelete,
    changeActive,
    changeStatus,
    changePassword,
  }
}
