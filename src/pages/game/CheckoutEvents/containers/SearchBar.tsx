import { IPBlockType, Status } from '@/lib/enums'
import { eventReviewStatusOpts } from '@/lib/options'
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
  const statusOpts = [{ label: '全部', value: 0 }, ...eventReviewStatusOpts]
  const lastDays = 7
  const days = [...Array(lastDays)].map((t, i) =>
    moment().locale('zh-tw').subtract(i, 'days').format('MM/DD(dd)'),
  )
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item>
        <Space>
          {days.map((d, i) => (
            <Button key={i}>{d}</Button>
          ))}
        </Space>
      </Form.Item>

      <Form.Item label="結帳狀態" name="status" initialValue={0}>
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
