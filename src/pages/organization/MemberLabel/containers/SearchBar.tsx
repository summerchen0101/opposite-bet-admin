import { Form, Input } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const onSearch = async () => {}
  return (
    <Form form={form} layout="inline" className="mb-2">
      <Form.Item name="keyword" label="標籤名稱">
        <Input style={{ width: 180 }} onChange={onSearch} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
