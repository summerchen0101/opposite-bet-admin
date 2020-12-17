import { LevelCode, Status } from '@/lib/enums'
import { levelOpts, statusOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
import React from 'react'

const SearchForm: React.FC = () => {
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item name="account">
        <Input placeholder="帳號" />
      </Form.Item>
      <Form.Item name="level" initialValue={LevelCode.Vendor}>
        <Select options={levelOpts} style={{ width: '120px' }} />
      </Form.Item>
      <Form.Item name="status" initialValue={null}>
        <Select options={statusOpts} style={{ width: '120px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchForm
