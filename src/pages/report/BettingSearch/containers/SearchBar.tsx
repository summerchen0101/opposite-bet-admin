import { RelativeDateBtns } from '@/components'
import { IPBlockType, PointOperateType, Status } from '@/lib/enums'
import { depositOpts, withdrawOpts } from '@/lib/options'
import { DatePicker, Form, Select } from 'antd'
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
      <Form.Item label="注單編號">
        <Select
          mode="tags"
          tokenSeparators={[',']}
          placeholder="請輸入"
          allowClear
          style={{ width: '200px' }}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar