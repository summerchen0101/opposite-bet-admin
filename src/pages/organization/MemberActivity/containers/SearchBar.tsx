import { DateRangePicker, RelativeDateBtns } from '@/components'
import { DatePicker, Form, Input } from 'antd'
import React from 'react'

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const onSearch = async () => {}
  return (
    <Form form={form} layout="inline" className="mb-2">
      <Form.Item name="keyword">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item>
        <RelativeDateBtns />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
