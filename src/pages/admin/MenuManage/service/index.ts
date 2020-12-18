import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import {
  setEditData,
  setTableData,
  setPermissionOpts,
  setRoleOpts,
} from '../reducer'
import { EditMenuRequest, CreateMenuRequest } from '../API/types'
export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getOptions = async () => {
    try {
      const perRes = await API.permission.options()
      const roleRes = await API.adminRole.options()
      dispatch(setPermissionOpts(perRes.data.permissions))
      dispatch(setRoleOpts(roleRes.data.roles))
    } catch (err) {
      apiErr(err)
    }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.menuManage.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async () => {
    try {
      const res = await API.menuManage.fetchAll()
      dispatch(setTableData(res.data.menus))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async function (values: CreateMenuRequest) {
    try {
      await API.menuManage.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditMenuRequest) => {
    try {
      await API.menuManage.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.menuManage.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.menuManage.active({ id, is_active: status })
      await getTableData()
      message.success('狀態更新成功')
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
  }
}
