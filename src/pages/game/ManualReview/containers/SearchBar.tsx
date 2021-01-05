import { IPBlockType, Status } from '@/lib/enums'
import { Button, DatePicker, Form, Select, Space } from 'antd'
import React from 'react'
import { useAPIService } from '../service'

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
  const statusOpts = [
    { label: '全部', value: 0 },
    { label: '未結帳', value: 1 },
    { label: '結帳中', value: 2 },
    { label: '已結帳', value: 3 },
  ]
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item>
        <Space>
          <DatePicker.RangePicker />
          <Button>昨日</Button>
          <Button>今日</Button>
        </Space>
      </Form.Item>
      <Form.Item label="狀態" name="status" initialValue={0}>
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
