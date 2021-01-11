import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { CreatePlaySetting, EditPlaySetting } from '../API/types'
import { setEditData, setTableData } from '../reducer'
import {
  selectPlayCode,
  selectSectionCode,
  useTypedSelector,
} from '../selectors'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()
  const section_code = useTypedSelector(selectSectionCode)
  const play_code = useTypedSelector(selectPlayCode)

  const getFormData = async (id: number) => {
    try {
      const res = await API.PlaySetting.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async () => {
    if (!section_code || !play_code) {
      return
    }
    try {
      const res = await API.PlaySetting.fetchAll({ section_code, play_code })
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (
    values: Omit<CreatePlaySetting, 'section_code' | 'play_code'>,
  ) => {
    try {
      await API.PlaySetting.create({ ...values, section_code, play_code })
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (
    values: Omit<EditPlaySetting, 'section_code' | 'play_code'>,
  ) => {
    try {
      await API.PlaySetting.edit({ ...values, section_code, play_code })
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
  }
}
