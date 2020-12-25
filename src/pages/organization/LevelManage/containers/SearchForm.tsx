import { LevelCode, Status } from '@/lib/enums'
import { levelOpts, statusOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
import React from 'react'

const SearchForm: React.FC = () => {
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item name="account" label="帳號">
        <Input placeholder="帳號" />
      </Form.Item>
      <Form.Item name="status" initialValue={0} label="狀態">
        <Select options={statusOpts} style={{ width: '120px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchForm
