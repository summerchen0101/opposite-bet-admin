import { DateRangePicker } from '@/components'
import { Button, Form, Input, Select, Space } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const typeOpts = [
    { label: '全部', value: 'all' },
    { label: '跑馬燈', value: 'opt1' },
    { label: '系統通知', value: 'opt2' },
    { label: '賽事公告', value: 'opt3' },
    { label: '活動優惠', value: 'opt4' },
  ]
  const statusOpts = [
    { label: '全部', value: 'all' },
    { label: '進行中', value: 'opt1' },
    { label: '即將到來', value: 'opt2' },
    { label: '逾期', value: 'opt3' },
    { label: '停用', value: 'opt4' },
  ]
  const displayOpts = [
    { label: '全部', value: 'all' },
    { label: '啟用', value: 'opt1' },
    { label: '停用', value: 'opt2' },
  ]
  return (
    <Form layout="inline" className="mb-1">
      <Form.Item label="期間">
        <DateRangePicker />
      </Form.Item>
      <Form.Item label="標題">
        <Input.Search />
      </Form.Item>
      <Form.Item label="公告種類" name="type" initialValue="all">
        <Select options={typeOpts} style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item label="前台顯示" name="display" initialValue="all">
        <Select options={displayOpts} style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item label="狀態" name="status" initialValue="all">
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
