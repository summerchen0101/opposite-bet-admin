import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { SportSearchFields, CreateSport, EditSport } from '../API/types'
import { useDataProvider } from '../context/DataProvider'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const [, setList] = useDataProvider().sportList
  const [, setView] = useDataProvider().sportView

  const getOptions = async () => {
    try {
      const res = await API.GameSetting.Country.options()
    } catch (err) {
      apiErr(err)
    }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.GameSetting.Sport.fetchById(id)
      setView(res.data)
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: SportSearchFields) => {
    try {
      const res = await API.GameSetting.Sport.fetchAll(search)
      setList(res.data.sports)
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateSport) => {
    try {
      await API.GameSetting.Sport.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditSport) => {
    try {
      await API.GameSetting.Sport.edit(values)
      await getTableData()
      message.success('修改成功')
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
  }
}
