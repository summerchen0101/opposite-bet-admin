import { statusOpts, yesNoOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const onSearch = async () => {}
  return (
    <Form form={form} layout="inline" className="mb-2">
      <Form.Item name="category" label="分類" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }]}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="is_active" label="狀態" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="open_win" label="另開視窗" initialValue={0}>
        <Select
          options={yesNoOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
