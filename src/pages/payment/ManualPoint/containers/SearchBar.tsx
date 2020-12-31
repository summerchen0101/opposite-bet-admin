import { OptionalDateRangePicker } from '@/components'
import { IPBlockType, Status } from '@/lib/enums'
import { IPBlockTypeOpts, pointControlOpts } from '@/lib/options'
import { DatePicker, Form, Input, Radio, Select } from 'antd'
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
      <Form.Item label="存提類型">
        <Radio.Group defaultValue={1} options={pointControlOpts} />
      </Form.Item>

      <Form.Item label="平台">
        <Select style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item label="存提項目">
        <Select style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item label="會員帳號">
        <Input.Search />
      </Form.Item>
      <Form.Item label="存提日期">
        <DatePicker.RangePicker />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
