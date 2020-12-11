import { DateRangePicker, RelativeDateBtns } from '@/components'
import { levelOpts } from '@/lib/dropdownOptions'
import { Form, Input, Row, Select, Space } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  return (
    <Form layout="inline" className="mb-2">
      <div className="mb-1 d-flex">
        <Form.Item label="層級" name="level" initialValue="all">
          <Select
            options={[...levelOpts, { label: '全部', value: 'all' }]}
            style={{ width: '130px' }}
          />
        </Form.Item>
        <Form.Item label="帳號">
          <Input placeholder="帳號" />
        </Form.Item>
      </div>
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
