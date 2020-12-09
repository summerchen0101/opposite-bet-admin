import { LevelCode, Status } from '@/lib/enums'
import { Form, Input, Select } from 'antd'
import React from 'react'

const SearchForm: React.FC = () => {
  const levelOpts = [
    { label: '廠商', value: LevelCode.Vendor },
    { label: '股東', value: LevelCode.Shareholder },
    { label: '總代理', value: LevelCode.MajorAgent },
    { label: '代理', value: LevelCode.Agent },
    { label: '會員', value: LevelCode.Member },
  ]
  const statusOpts = [
    { label: '全部', value: Status.ALL },
    { label: '啟用', value: Status.ON },
    { label: '停用', value: Status.OFF },
  ]
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item name="account">
        <Input placeholder="帳號" />
      </Form.Item>
      <Form.Item name="level" initialValue={LevelCode.Vendor}>
        <Select options={levelOpts} style={{ width: '120px' }} />
      </Form.Item>
      <Form.Item name="status" initialValue={Status.ALL}>
        <Select options={statusOpts} style={{ width: '120px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchForm
