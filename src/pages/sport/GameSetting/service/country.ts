import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { CountrySearchFields, CreateCountry, EditCountry } from '../API/types'
import { useDataProvider } from '../context/DataProvider'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const [, setList] = useDataProvider().list
  const [, setView] = useDataProvider().view

  const getFormData = async (id: number) => {
    try {
      const res = await API.GameSetting.Country.fetchById(id)
      setView(res.data)
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: CountrySearchFields) => {
    try {
      const res = await API.GameSetting.Country.fetchAll(search)
      setList(res.data.countries)
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateCountry) => {
    try {
      await API.GameSetting.Country.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditCountry) => {
    try {
      await API.GameSetting.Country.edit(values)
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
  }
}
