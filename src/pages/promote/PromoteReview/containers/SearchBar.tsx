import { Form, Input, Select } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const onSearch = async () => {}
  const reviewStatusOpts = [
    { label: '全部', value: 0 },
    { label: '已通過', value: 1 },
    { label: '已拒絕', value: 2 },
    { label: '已過期', value: 3 },
    { label: '未入帳', value: 4 },
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
      <Form.Item name="status" label="狀態" initialValue={0}>
        <Select
          options={reviewStatusOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
