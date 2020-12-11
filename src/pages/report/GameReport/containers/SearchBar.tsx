import { DateRangePicker, RelativeDateBtns } from '@/components'
import { levelOpts } from '@/lib/dropdownOptions'
import { Form, Input, Row, Select, Space } from 'antd'
import React from 'react'

const statusOpts = [
  { label: '全部', value: 'all' },
  { label: '未過帳', value: 'opt1' },
  { label: '已過帳', value: 'opt2' },
]

const SearchBar: React.FC = () => {
  return (
    <Form layout="inline" className="mb-2">
      <div className=" mb-1 d-flex">
        <Form.Item label="帳號">
          <Input placeholder="帳號" style={{ width: '130px' }} />
        </Form.Item>
        <Form.Item label="注單編號">
          <Input placeholder="注單編號" style={{ width: '130px' }} />
        </Form.Item>
        <Form.Item label="注單IP">
          <Input placeholder="注單IP" style={{ width: '130px' }} />
        </Form.Item>
        <Form.Item label="層級" name="level" initialValue="all">
          <Select
            options={[...levelOpts, { label: '全部', value: 'all' }]}
            style={{ width: '130px' }}
          />
        </Form.Item>
        <Form.Item label="狀態" name="status" initialValue="all">
          <Select options={statusOpts} style={{ width: '130px' }} />
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
