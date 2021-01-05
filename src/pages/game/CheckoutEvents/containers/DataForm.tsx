import { IPBlockType, PlatformType } from '@/lib/enums'
import { yesNoOpts } from '@/lib/options'
import { Button, Checkbox, Descriptions, Form, Input, Radio, Space } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
export interface FormData {
  id?: number
  block_type: IPBlockType
  platform_type: PlatformType
  ip: string
  note: string
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const checkoutList = [
  { label: '即時比分', value: 1 },
  { label: '全場', value: 2 },
  { label: '半場', value: 3 },
]
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])

  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item>
        <Descriptions bordered size="small" column={2}>
          <Descriptions.Item label="開賽時間">
            2020-12-30 09:11:20
          </Descriptions.Item>
          <Descriptions.Item label="帳務日期">2020-12-30</Descriptions.Item>
          <Descriptions.Item label="球種">美棒</Descriptions.Item>
          <Descriptions.Item label="聯盟">某個聯盟</Descriptions.Item>
          <Descriptions.Item label="主隊">主隊的名字</Descriptions.Item>
          <Descriptions.Item label="客隊">客隊的名字</Descriptions.Item>
        </Descriptions>
      </Form.Item>
      {checkoutList.map((t) => (
        <Form.Item label={t.label} key={t.value}>
          <Space>
            <Form.Item style={{ width: '100px' }} className="mb-0">
              <Input placeholder="主" />
            </Form.Item>
            <span>-</span>
            <Form.Item style={{ width: '100px' }} className="mb-0">
              <Input placeholder="客" />
            </Form.Item>
            <Form.Item className="mb-0">
              <Checkbox>延賽/取消</Checkbox>
            </Form.Item>
            <Form.Item style={{ width: '130px' }} className="mb-0">
              <Input placeholder="取消備註" />
            </Form.Item>
            <Button type="primary">結帳</Button>
          </Space>
        </Form.Item>
      ))}
    </Form>
  )
}

export default DataForm
