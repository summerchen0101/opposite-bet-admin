import { Form, Select } from 'antd'
import React, { useEffect } from 'react'
import { useSearchProvider } from '../context/SearcProvider'
import {
  selectGameOpts,
  selectLeagueOpts,
  useTypedSelector,
} from '../selectors'
import { useAPIService } from '../service'

interface SearchFormData {
  game_id: number
  league_id: number
}

const SearchBar: React.FC = () => {
  const { getTableData, getLeagueOptions, getGameOptions } = useAPIService()
  const [form] = Form.useForm()
  const gameOpts = useTypedSelector(selectGameOpts)
  const leagueOpts = useTypedSelector(selectLeagueOpts)
  const [, setGameId] = useSearchProvider('gameId')
  const [, setLeagueId] = useSearchProvider('leagueId')
  const [, setPerpage] = useSearchProvider('perpage')

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
  const handlePerpageChanged = (perpage) => {
    setPerpage(perpage)
  }

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
          placeholder="請選擇"
        />
      </Form.Item>
      <Form.Item label="聯盟" name="league_id">
        <Select
          options={leagueOpts}
          style={{ width: '130px' }}
          onChange={handleLeagueChanged}
          placeholder="請選擇"
        />
      </Form.Item>
      {/* <Form.Item label="每頁顯示" name="perpage" initialValue={20}>
        <Select
          options={[
            { label: '10筆', value: 10 },
            { label: '20筆', value: 20 },
            { label: '50筆', value: 50 },
          ]}
          style={{ width: '80px' }}
          onChange={handlePerpageChanged}
        />
      </Form.Item> */}
    </Form>
  )
}

export default SearchBar
