import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { CreateSection, EditSection } from '../API/types'
import { setEditData, setTableData } from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getOptions = async () => {
    // try {
    //   const res = await API.permission.options()
    //   dispatch(setPermissionOpts(res.data.permissions))
    // } catch (err) {
    //   apiErr(err)
    // }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.Section.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async () => {
    try {
      const res = await API.Section.fetchAll()
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateSection) => {
    try {
      await API.Section.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditSection) => {
    try {
      await API.Section.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.Section.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.Section.active({ id, is_active: status })
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