import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { setTableData } from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

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

  return { getTableData, onCreate }
}
