import { Status } from '@/lib/enums'
import { statusOpts } from '@/lib/options'
import { DatePicker, Form, Input, Select } from 'antd'
import { Moment } from 'moment'
import React from 'react'
import { useAPIService } from '../service'

interface SearchFormData {
  date_range: [Moment, Moment]
  content: string
  is_active: Status
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      content: f.content,
      is_active: f.is_active,
      start_at: f.date_range?.[0].unix(),
      end_at: f.date_range?.[1].unix(),
    })
  }
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="期間" name="date_range">
        <DatePicker.RangePicker onChange={onSearch} />
      </Form.Item>
      <Form.Item label="標題" name="content">
        <Input.Search onSearch={onSearch} allowClear />
      </Form.Item>
      <Form.Item label="狀態" name="is_active" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
