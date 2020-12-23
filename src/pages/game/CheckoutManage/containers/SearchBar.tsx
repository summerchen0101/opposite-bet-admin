import { DateRangePicker } from '@/components'
import { Button, Form, Select, Space } from 'antd'
import React from 'react'
import moment from 'moment'
const SearchBar: React.FC = () => {
  const statusOpts = [
    { label: '全部', value: 'all' },
    { label: '已結帳', value: 'opt1' },
    { label: '未結帳', value: 'opt2' },
  ]
  const lastDays = 7
  const days = [...Array(lastDays)].map((t, i) =>
    moment().locale('zh-tw').subtract(i, 'days').format('MM/DD(dd)'),
  )
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item>
        <Space>
          {days.map((d, i) => (
            <Button key={i}>{d}</Button>
          ))}
        </Space>
      </Form.Item>

      <Form.Item name="status" initialValue="all">
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
