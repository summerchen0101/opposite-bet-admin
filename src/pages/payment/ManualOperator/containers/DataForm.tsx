import { IPBlockType, PlatformType, PointOperateType } from '@/lib/enums'
import {
  bankCodeOpts,
  depositOpts,
  pointControlOpts,
  pointOperateOpts,
  withdrawOpts,
} from '@/lib/options'
import { Form, Input, InputNumber, Radio, Select, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect, useState } from 'react'
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
const operatorTypeOpts = {
  [PointOperateType.Add]: depositOpts,
  [PointOperateType.Subtract]: withdrawOpts,
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  const [operatorType, setOperatorType] = useState(1)
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item label="廠商">
        <Select options={[{ label: 'ABC', value: 1 }]} placeholder="請選擇" />
      </Form.Item>
      <Form.Item label="會員帳號">
        <Input />
      </Form.Item>
      <Form.Item label="調節類別">
        <Input.Group compact>
          <Form.Item>
            <Select
              options={pointOperateOpts}
              defaultValue={operatorType}
              onChange={(v) => setOperatorType(v)}
              style={{ width: '120px' }}
            />
          </Form.Item>
          <Form.Item>
            <Select
              options={operatorTypeOpts[operatorType]}
              style={{ width: '200px' }}
              defaultValue={1}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item label="金額">
        <InputNumber className="w-100" min={1} />
      </Form.Item>
      <Form.Item label="備註">
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default DataForm
