import { IPBlockType, Status } from '@/lib/enums'
import {
  currencyOpts,
  IPBlockTypeOpts,
  langOpts,
  statusOpts,
} from '@/lib/options'
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
      <Form.Item label="廠商">
        <Input.Search onSearch={onSearch} />
      </Form.Item>
      <Form.Item label="語系">
        <Select
          options={[{ label: '全部', value: 0 }, ...langOpts]}
          style={{ width: '130px' }}
          onChange={onSearch}
          defaultValue={0}
        />
      </Form.Item>
      <Form.Item label="幣別">
        <Select
          options={[{ label: '全部', value: 0 }, ...currencyOpts]}
          style={{ width: '130px' }}
          onChange={onSearch}
          defaultValue={0}
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
