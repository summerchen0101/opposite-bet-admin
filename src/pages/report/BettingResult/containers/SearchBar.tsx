import { RelativeDateBtns } from '@/components'
import { LevelCode, Status } from '@/lib/enums'
import { ipStatusOpts, levelOpts, statusOpts } from '@/lib/options'
import { Button, Checkbox, DatePicker, Form, Input, Select, Space } from 'antd'
import { Moment } from 'moment'
import React from 'react'
// import { useAPIService } from '../service'

interface SearchFormData {
  date_range: [Moment, Moment]
  content: string
  is_active: Status
}

const SearchBar: React.FC = () => {
  // const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    // await getTableData({
    //   content: f.content,
    //   is_active: f.is_active,
    //   start_at: f.date_range?.[0].unix(),
    //   end_at: f.date_range?.[1].unix(),
    // })
  }
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item name="date_range" className="w-100">
        <Space>
          <DatePicker.RangePicker />
          <RelativeDateBtns />
        </Space>
      </Form.Item>
    </Form>
  )
}

export default SearchBar
