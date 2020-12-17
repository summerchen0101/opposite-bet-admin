import { statusOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const onSearch = async () => {}
  const processOpts = [
    { label: '全部', value: 0 },
    { label: '未開始', value: 1 },
    { label: '進行中', value: 2 },
    { label: '已過期', value: 3 },
  ]
  return (
    <Form form={form} layout="inline" className="mb-2">
      <Form.Item name="acc" label="管理者帳號">
        <Input.Search
          placeholder="請輸入內容"
          onSearch={onSearch}
          allowClear
          style={{ width: 180 }}
        />
      </Form.Item>
      <Form.Item name="status" label="啟用狀態" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="status" label="期間狀態" initialValue={0}>
        <Select
          options={processOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
