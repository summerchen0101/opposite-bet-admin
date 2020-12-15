import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
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
      const res = await API.adminRole.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async () => {
    try {
      const res = await API.adminRole.fetchAll()
      dispatch(setTableData(res.data.roles))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values) => {
    try {
      await API.adminRole.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values) => {
    try {
      await API.adminRole.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.adminRole.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeStatus = async (id: number, status: boolean) => {
    try {
      await API.adminRole.active({ id, is_active: status })
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
    changeStatus,
  }
}
