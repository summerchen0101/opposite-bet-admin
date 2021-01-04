import { OptionalDateRangePicker } from '@/components'
import { IPBlockType, Status } from '@/lib/enums'
import { IPBlockTypeOpts, pointControlOpts } from '@/lib/options'
import { DatePicker, Form, Input, Radio, Select } from 'antd'
import { Moment } from 'moment'
import React, { useEffect, useState } from 'react'
import { useAPIService } from '../service'

interface SearchFormData {
  ip: string
  block_type: IPBlockType
  is_active: Status
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const [controlType, setControlType] = useState(1)
  const [operatorOpts, setOperatorOpts] = useState([])
  const depositOpts = [
    { label: '新增存款(計入存款)', value: 1 },
    { label: '人工加錢(計入調整金額)', value: 2 },
    { label: '人工優惠(計入活動優惠)', value: 3 },
  ]

  const withdrawOpts = [
    { label: '新增提領(計入提領)', value: 1 },
    { label: '人工扣錢(計入調整金額)', value: 2 },
    { label: '人工扣除優惠(計入活動優惠)', value: 3 },
  ]
  useEffect(() => {
    const options = controlType === 1 ? depositOpts : withdrawOpts
    setOperatorOpts([{ label: '全部', value: 0 }, ...options])
  }, [controlType])
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
      <Form.Item label="調節類別">
        <Radio.Group
          options={pointControlOpts}
          defaultValue={1}
          onChange={(e) => setControlType(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="操作類型">
        <Select
          options={operatorOpts}
          style={{ width: '180px' }}
          defaultValue={0}
        />
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
