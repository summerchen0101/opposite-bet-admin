import { statusOpts } from '@/lib/options'
import { Form, Select } from 'antd'
import React, { useEffect } from 'react'
import { useSearchProvider } from '../context/SearcProvider'
import {
  selectCountryOpts,
  selectGameOpts,
  selectLeagueOpts,
  selectSportOpts,
  useTypedSelector,
} from '../selectors'
import { useAPIService } from '../service'

interface SearchFormData {
  game_id: number
  league_id: number
}

const SearchBar: React.FC = () => {
  const { getTableData, getLeagueOptions } = useAPIService()
  const [form] = Form.useForm()
  const gameOpts = useTypedSelector(selectGameOpts)
  const leagueOpts = useTypedSelector(selectLeagueOpts)
  const [, setGameId] = useSearchProvider('gameId')
  const [, setLeagueId] = useSearchProvider('leagueId')

  const handleGameChanged = (gameId) => {
    setGameId(gameId)
    getLeagueOptions(gameId)
  }
  const handleLeagueChanged = (legId) => {
    setLeagueId(legId)
    getTableData({
      league_id: legId,
    })
  }
  const { getGameOptions } = useAPIService()

  useEffect(() => {
    getGameOptions()
  }, [])
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="球種" name="game_id">
        <Select
          options={gameOpts}
          style={{ width: '130px' }}
          onChange={handleGameChanged}
        />
      </Form.Item>
      <Form.Item label="聯盟" name="league_id">
        <Select
          options={leagueOpts}
          style={{ width: '130px' }}
          onChange={handleLeagueChanged}
        />
      </Form.Item>
      {/* <Form.Item label="狀態" name="is_active" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item> */}
    </Form>
  )
}

export default SearchBar
