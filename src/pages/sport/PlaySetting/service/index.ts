import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { CreatePlaySetting, EditPlaySetting } from '../API/types'
import {
  setEditData,
  setPlayOpts,
  setSectionOpts,
  setTableData,
} from '../reducer'
import { selectPlayId, selectSectionId, useTypedSelector } from '../selectors'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()
  const section_id = useTypedSelector(selectSectionId)
  const play_id = useTypedSelector(selectPlayId)

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
      const res = await API.PlaySetting.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async () => {
    if (!section_id || !play_id) {
      return
    }
    try {
      const res = await API.PlaySetting.fetchAll({ section_id, play_id })
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (
    values: Omit<CreatePlaySetting, 'section_id' | 'play_id'>,
  ) => {
    try {
      await API.PlaySetting.create({ ...values, section_id, play_id })
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (
    values: Omit<EditPlaySetting, 'section_id' | 'play_id'>,
  ) => {
    try {
      await API.PlaySetting.edit({ ...values, section_id, play_id })
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.PlaySetting.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.PlaySetting.active({ id, is_active: status })
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
