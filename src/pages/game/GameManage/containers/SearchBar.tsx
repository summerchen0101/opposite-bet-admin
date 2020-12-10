import { BasicSelector, DateRangePicker } from '@/components'
import { Status } from '@/lib/enums'
import { Button, Select, Space } from 'antd'
import { Form } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const statusOpts = [
    { label: '全部', value: Status.ALL },
    { label: '啟用', value: Status.ON },
    { label: '停用', value: Status.OFF },
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

      <Form.Item name="status" initialValue={Status.ALL}>
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
