import { OptionalDateRangePicker } from '@/components'
import { IPBlockType, Status } from '@/lib/enums'
import { paywayOpts, statusOpts, thirdPartyOpts } from '@/lib/options'
import { DatePicker, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import { useAPIService } from '../service'

interface SearchFormData {
  ip: string
  block_type: IPBlockType
  is_active: Status
}
const operatorTypeOpts = {
  1: [
    { label: '人工加錢', value: 1 },
    { label: '人工自訂優惠', value: 2 },
    { label: '人工補點', value: 3 },
  ],
  2: [
    { label: '人工扣錢', value: 1 },
    { label: '放棄優惠', value: 2 },
    { label: '扣除非法下注派彩', value: 3 },
  ],
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
  const [operatorType, setOperatorType] = useState(1)
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="廠商" name="merchant">
        <Select
          placeholder="請選擇"
          options={[{ label: 'abc', value: 1 }]}
          style={{ width: '150px' }}
        />
      </Form.Item>
      <Form.Item label="會員帳號" name="member_acc">
        <Input.Search />
      </Form.Item>
      <Form.Item label="日期">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="調節類別">
        <Input.Group compact>
          <Select
            options={[
              { label: '加錢', value: 1 },
              { label: '扣錢', value: 2 },
            ]}
            defaultValue={operatorType}
            onChange={(v) => setOperatorType(v)}
            style={{ width: '120px' }}
          />
          <Select
            options={operatorTypeOpts[operatorType]}
            style={{ width: '120px' }}
            defaultValue={1}
          />
        </Input.Group>
      </Form.Item>
    </Form>
  )
}

export default SearchBar
