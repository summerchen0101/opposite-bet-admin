import { OptionalDateRangePicker } from '@/components'
import { IPBlockType, Status } from '@/lib/enums'
import { paywayOpts } from '@/lib/options'
import { DatePicker, Form, Input, Select } from 'antd'
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
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="廠商" name="merchant">
        <Select
          placeholder="請選擇"
          options={[{ label: 'abc', value: 1 }]}
          style={{ width: '150px' }}
        />
      </Form.Item>
      <Form.Item label="會員帳號">
        <Input.Search style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item label="申請日期">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="會員帳戶帳號">
        <Input.Search style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item label="會員帳戶名稱">
        <Input.Search style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item label="出金金額">
        <Input.Group compact>
          <Form.Item className="mb-0">
            <Input
              placeholder="最小值"
              style={{ width: '120px' }}
              addonAfter="~"
            />
          </Form.Item>
          <Form.Item className="mb-0">
            <Input placeholder="最大值" style={{ width: '90px' }} />
          </Form.Item>
        </Input.Group>
      </Form.Item>
    </Form>
  )
}

export default SearchBar
