import { OptionalDateRangePicker } from '@/components'
import { IPBlockType, PointOperateType, Status } from '@/lib/enums'
import {
  depositOpts,
  paywayOpts,
  pointOperateOpts,
  statusOpts,
  thirdPartyOpts,
  withdrawOpts,
} from '@/lib/options'
import { DatePicker, Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import { useAPIService } from '../service'

interface SearchFormData {
  ip: string
  block_type: IPBlockType
  is_active: Status
}
const operatorTypeOpts = {
  [PointOperateType.Add]: [{ label: '全部', value: 0 }, ...depositOpts],
  [PointOperateType.Subtract]: [{ label: '全部', value: 0 }, ...withdrawOpts],
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
  const [operatorType, setOperatorType] = useState(0)
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
            options={[{ label: '全部', value: 0 }, ...pointOperateOpts]}
            defaultValue={operatorType}
            onChange={(v) => setOperatorType(v)}
            style={{ width: '120px' }}
          />
          {operatorType > 0 && (
            <Select
              options={operatorTypeOpts[operatorType]}
              style={{ width: '120px' }}
              defaultValue={0}
            />
          )}
        </Input.Group>
      </Form.Item>
    </Form>
  )
}

export default SearchBar
