import { OptionalDateRangePicker } from '@/components'
import { IPBlockType, Status } from '@/lib/enums'
import { IPBlockTypeOpts, paywayOpts, statusOpts } from '@/lib/options'
import { DatePicker, Form, Input, Select, Space } from 'antd'
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
            { label: '申請時間', value: 'applyAt' },
            { label: '匯款時間', value: 'reviewAt' },
          ]}
          selectedValue="applyAt"
        />
      </Form.Item>
      <Form.Item label="公司帳戶帳號">
        <Input.Search style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item label="公司帳戶名稱">
        <Input.Search style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item label="儲值金額">
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
      <Form.Item label="申請單類型" name="apply_type">
        <Select
          mode="multiple"
          allowClear
          options={[
            { label: '線下充值', value: 1 },
            { label: '線下充值-直接核發', value: 2 },
          ]}
          style={{ width: '160px' }}
        />
      </Form.Item>
      <Form.Item label="支付方式" name="pay_type">
        <Select
          mode="multiple"
          allowClear
          options={paywayOpts}
          style={{ width: '200px' }}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
