import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { CreateBlackIp, EditBlackIp, SearchFields } from '../API/types'
import {
  setEditData,
  setTableData,
  setSectionOpts,
  setPlayOpts,
} from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getSectionOptions = async () => {
    try {
      const res = await API.Section.options()
      dispatch(setSectionOpts(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }
  const getPlayOptions = async () => {
    try {
      const res = await API.Play.options()
      dispatch(setPlayOpts(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.BlackIp.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: SearchFields) => {
    try {
      const res = await API.BlackIp.fetchAll(search)
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateBlackIp) => {
    try {
      await API.BlackIp.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditBlackIp) => {
    try {
      await API.BlackIp.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.BlackIp.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.BlackIp.active({ id, is_active: status })
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
    onDelete,
    changeActive,
    getSectionOptions,
    getPlayOptions,
  }
}
