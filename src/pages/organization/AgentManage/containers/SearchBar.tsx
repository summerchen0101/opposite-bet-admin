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
      <Form.Item label="廠商" name="merchant">
        <Select
          options={[{ label: 'abc', value: 'abc' }]}
          style={{ width: '150px' }}
        />
      </Form.Item>
      <Form.Item label="帳號" name="account">
        <Input.Search />
      </Form.Item>
      <Form.Item label="狀態" name="is_active" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item>
      {/* <Form.Item label="標籤" name="tag">
        <Input.Search />
      </Form.Item> */}
    </Form>
  )
}

export default SearchBar
