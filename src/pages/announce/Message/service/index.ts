import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { CreateMessage, SearchFields } from '../API/types'
import { setEditData, setTableData } from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getFormData = async (id: number) => {
    try {
      const res = await API.Message.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: SearchFields) => {
    try {
      const res = await API.Message.fetchAll(search)
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateMessage) => {
    try {
      await API.Message.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.Message.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }

  return {
    getTableData,
    onCreate,
    getFormData,
    onDelete,
  }
}
