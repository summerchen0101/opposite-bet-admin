import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { CreateLeague, EditLeague, LeagueSearch } from '../API/types'
import {
  setEditData,
  setTableData,
  setCountryOpts,
  setSportOpts,
  setGameOpts,
} from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()

  const getOptions = async () => {
    try {
      const countryRes = await API.Country.options()
      dispatch(setCountryOpts(countryRes.data.countries))
      const sportRes = await API.Sport.options()
      dispatch(setSportOpts(sportRes.data.sports))
      const gameRes = await API.SportGame.options()
      dispatch(setGameOpts(gameRes.data.games))
    } catch (err) {
      apiErr(err)
    }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.League.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: LeagueSearch) => {
    try {
      const res = await API.League.fetchAll(search)
      dispatch(setTableData(res.data.leagues))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateLeague) => {
    try {
      await API.League.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditLeague) => {
    try {
      await API.League.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.League.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.League.active({ id, is_active: status })
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
