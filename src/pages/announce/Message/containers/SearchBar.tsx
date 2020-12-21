import { LevelCode, Status } from '@/lib/enums'
import { statusOpts, newsTypeOpts } from '@/lib/options'
import { DatePicker, Form, Input, Radio, Select } from 'antd'
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
      <Form.Item label="標題" name="title">
        <Input.Search onSearch={onSearch} allowClear />
      </Form.Item>
      <Form.Item label="發送對象" name="target_level" initialValue={0}>
        <Radio.Group>
          <Radio value={0}>全部</Radio>
          <Radio value={LevelCode.Member}>會員</Radio>
          <Radio value={LevelCode.Agent}>代理</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}

export default SearchBar
