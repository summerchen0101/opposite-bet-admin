import { IPBlockType, PlatformType } from '@/lib/enums'
import { bankCodeOpts, pointControlOpts } from '@/lib/options'
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
              options={[
                { label: '加錢', value: 1 },
                { label: '扣錢', value: 2 },
              ]}
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
