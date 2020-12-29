import { IPBlockType, Status } from '@/lib/enums'
import { IPBlockTypeOpts, statusOpts } from '@/lib/options'
import { DatePicker, Form, Input, Select } from 'antd'
import { Moment } from 'moment'
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
      <Form.Item
        label="IP"
        name="ip"
        rules={[
          {
            pattern: new RegExp(
              '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\\/(\\d|[1-2]\\d|3[0-2]))$',
            ),
            message: 'IP格式有誤 ex: 0.0.0.0/24',
          },
        ]}
      >
        <Input.Search onSearch={onSearch} placeholder="0.0.0.0/24" />
      </Form.Item>
      <Form.Item label="類型" name="block_type" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }, ...IPBlockTypeOpts]}
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
