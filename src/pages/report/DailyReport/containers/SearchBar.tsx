import { DateRangePicker, RelativeDateBtns } from '@/components'
import { levelOpts } from '@/lib/options'
import { Form, Input, Row, Select, Space } from 'antd'
import React from 'react'

const venderOpts = [
  { label: '全部', value: 'all' },
  { label: 'AG', value: 'AG' },
  { label: 'MS19', value: 'MS19' },
]

const SearchBar: React.FC = () => {
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item label="廠商" name="vendor" initialValue="all">
        <Select options={venderOpts} style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item>
        <DateRangePicker />
      </Form.Item>
      <Form.Item>
        <RelativeDateBtns />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
