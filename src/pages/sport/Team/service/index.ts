import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { message } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateTeam, EditTeam, TeamSearch } from '../API/types'
import { useSearchProvider } from '../context/SearcProvider'
import {
  setEditData,
  setGameOpts,
  setLeagueOpts,
  setTableData,
} from '../reducer'

export const useAPIService = () => {
  const { apiErr } = useErrorHandler()
  const dispatch = useDispatch()
  const [gameId, setGameId] = useSearchProvider('gameId')
  const [leagueId, setLeagueId] = useSearchProvider('leagueId')

  const getGameOptions = async () => {
    try {
      // const countryRes = await API.Country.options()
      // dispatch(setCountryOpts(countryRes.data.countries))
      // const sportRes = await API.Sport.options()
      // dispatch(setSportOpts(sportRes.data.sports))
      const gameRes = await API.Game.options()
      dispatch(setGameOpts(gameRes.data.list))
      // const leagueRes = await API.League.options()
      // dispatch(setLeagueOpts(leagueRes.data.list))
    } catch (err) {
      apiErr(err)
    }
  }
  const getLeagueOptions = async (game_id: number = gameId) => {
    try {
      const leagueRes = await API.League.options({ game_id })
      dispatch(setLeagueOpts(leagueRes.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const getFormData = async (id: number) => {
    try {
      const res = await API.Team.fetchById(id)
      dispatch(setEditData(res.data))
    } catch (err) {
      apiErr(err)
    }
  }

  const getTableData = async (search?: TeamSearch) => {
    try {
      const res = await API.Team.fetchAll({ league_id: leagueId, ...search })
      dispatch(setTableData(res.data.list))
    } catch (err) {
      apiErr(err)
    }
  }

  const onCreate = async (values: CreateTeam) => {
    try {
      await API.Team.create(values)
      await getTableData()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onEdit = async (values: EditTeam) => {
    try {
      await API.Team.edit(values)
      await getTableData()
      message.success('修改成功')
    } catch (err) {
      apiErr(err)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await API.Team.deleteById(id)
      await getTableData()
      message.success('刪除成功')
    } catch (err) {
      apiErr(err)
    }
  }
  const changeActive = async (id: number, status: boolean) => {
    try {
      await API.Team.active({ id, is_active: status })
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
    getGameOptions,
    getLeagueOptions,
    onDelete,
    changeActive,
  }
}
