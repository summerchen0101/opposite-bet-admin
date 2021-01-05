import { DateRangePicker } from '@/components'
import { Button, Form, Select, Space } from 'antd'
import React from 'react'
import moment from 'moment'
import { eventReviewStatusOpts } from '@/lib/options'
const SearchBar: React.FC = () => {
  const statusOpts = [{ label: '全部', value: 0 }, ...eventReviewStatusOpts]
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

      <Form.Item label="結帳狀態" name="status" initialValue={0}>
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
