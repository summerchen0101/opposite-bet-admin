import { DateRangePicker } from '@/components'
import { Button, Form, Select, Space } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const statusOpts = [
    { label: '全部', value: 'all' },
    { label: '未上架', value: 'opt1' },
    { label: '未結單', value: 'opt2' },
  ]
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item>
        <Space>
          <DateRangePicker />
          <Button>今日</Button>
          <Button>明日</Button>
        </Space>
      </Form.Item>

      <Form.Item name="status" initialValue="all">
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
