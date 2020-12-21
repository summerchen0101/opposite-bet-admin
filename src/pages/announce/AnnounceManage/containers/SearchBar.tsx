import { Status } from '@/lib/enums'
import { statusOpts, newsTypeOpts } from '@/lib/options'
import { DatePicker, Form, Input, Select } from 'antd'
import { Moment } from 'moment'
import React from 'react'
import { NewsType } from '../API/types'
import { useAPIService } from '../service'

interface SearchFormData {
  date_range: [Moment, Moment]
  title: string
  news_type: NewsType
  is_active: Status
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const typeOpts = newsTypeOpts
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      title: f.title,
      news_type: f.news_type,
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
      <Form.Item label="標題" name="title">
        <Input.Search onSearch={onSearch} allowClear />
      </Form.Item>
      <Form.Item label="公告類型" name="news_type" initialValue={0}>
        <Select
          options={typeOpts}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
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
