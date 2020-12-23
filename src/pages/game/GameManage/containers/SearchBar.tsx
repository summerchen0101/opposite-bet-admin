import { DateRangePicker } from '@/components'
import { statusOpts } from '@/lib/options'
import { Button, Form, Select, Space } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item>
        <Space>
          <DateRangePicker />
          <Button>今日</Button>
          <Button>明日</Button>
          <Button>2日+</Button>
        </Space>
      </Form.Item>

      <Form.Item name="is_active" initialValue={0}>
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
