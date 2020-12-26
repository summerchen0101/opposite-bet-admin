import { Form, Select } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const eventOpts = [
    { label: '全場', value: 'FULL' },
    { label: '半場', value: 'HALF' },
  ]
  const gameOpts = [
    { label: '反波膽', value: 'opposite' },
    { label: '總得分', value: 'total' },
  ]
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item name="event" label="場次" initialValue="FULL">
        <Select options={eventOpts} style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item name="game" label="玩法" initialValue="opposite">
        <Select options={gameOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
