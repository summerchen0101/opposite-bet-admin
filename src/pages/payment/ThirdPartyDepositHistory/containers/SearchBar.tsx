import { OptionalDateRangePicker } from '@/components'
import { IPBlockType, Status } from '@/lib/enums'
import { paywayOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
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
      <Form.Item label="日期">
        <OptionalDateRangePicker
          options={[
            { label: '申請時間', value: 1 },
            { label: '付款時間', value: 2 },
            { label: '完成時間', value: 3 },
            { label: '過期時間', value: 4 },
          ]}
          selectedValue={1}
        />
      </Form.Item>
      <Form.Item label="訂單編號">
        <Input.Search style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item label="訂單金額">
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
      <Form.Item label="第三方儲值充值方式" name="apply_type">
        <Select
          mode="multiple"
          allowClear
          options={[
            { label: 'ATM轉帳', value: 1 },
            { label: '超商代碼', value: 2 },
            { label: '信用卡', value: 3 },
          ]}
          style={{ width: '160px' }}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
