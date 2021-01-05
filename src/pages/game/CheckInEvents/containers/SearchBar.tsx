import { IPBlockType, Status } from '@/lib/enums'
import { eventReviewStatusOpts, statusOpts } from '@/lib/options'
import { Button, DatePicker, Form, Select, Space } from 'antd'
import React from 'react'
import { useAPIService } from '../service'
import moment from 'moment'
interface SearchFormData {
  ip: string
  block_type: IPBlockType
  is_active: Status
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      ip: f.ip,
      block_type: f.block_type,
      is_active: f.is_active,
    })
  }
  const lastDays = 7
  const days = [...Array(lastDays)].map((t, i) =>
    moment().locale('zh-tw').subtract(i, 'days').format('MM/DD(dd)'),
  )
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item>
        <Space>
          <DatePicker.RangePicker />
          <Button>今日</Button>
          <Button>明日</Button>
          <Button>2日+</Button>
        </Space>
      </Form.Item>

      <Form.Item name="is_active" initialValue={0}>
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
