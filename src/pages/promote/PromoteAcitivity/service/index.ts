import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CreateActivity, EditActivity, SearchFields } from '../API/types'
import { setEditData, setTableData } from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()
  const history = useHistory()

  const getFormData = async (id: number) => {
    try {
      const res = await API.Activity.fetchById(id)
      // dispatch(setEditData(res.data))
      return res.data
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: SearchFields) => {
    try {
      const res = await API.Activity.fetchAll(search)
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateActivity) => {
    try {
      await API.Activity.create(values)
      message.success('新增成功')
      history.goBack()
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditActivity) => {
    try {
      await API.Activity.edit(values)
      await getTableData()
      message.success('修改成功')
      history.goBack()
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.Activity.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }

  return {
    getTableData,
    onCreate,
    onEdit,
    getFormData,
    onDelete,
  }
}
