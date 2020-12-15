import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { Status } from '../API/types'
import { setEditData, setTableData, setPermissionOpts } from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getOptions = async () => {
    try {
      const res = await API.permission.options()
      dispatch(setPermissionOpts(res.data.permissions))
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

  const getTableData = async () => {
    try {
      const res = await API.adminAccount.fetchAll()
      dispatch(setTableData(res.data.users))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values) => {
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
  const changeStatus = async (id: number, status: Status) => {
    try {
      await API.adminAccount.status({ id, status })
      await getTableData()
      message.success('鎖定狀態更新成功')
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
  }
}
