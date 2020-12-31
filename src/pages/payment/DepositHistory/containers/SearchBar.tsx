import { OptionalDateRangePicker } from '@/components'
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
        label="狀態"
        name="is_active"
        initialValue={1}
        style={{ width: '180px' }}
      >
        <Select
          options={[
            { label: '待審核', value: 1 },
            { label: '已完成', value: 2 },
            { label: '已取消', value: 3 },
          ]}
        />
      </Form.Item>
      <Form.Item label="訂單編號">
        <Input.Search />
      </Form.Item>
      <Form.Item label="會員帳號">
        <Input.Search />
      </Form.Item>
      <Form.Item label="日期">
        <OptionalDateRangePicker
          options={[
            { label: '申請時間', value: 'applyAt' },
            { label: '稽核時間', value: 'reviewAt' },
          ]}
          selectedValue="applyAt"
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
