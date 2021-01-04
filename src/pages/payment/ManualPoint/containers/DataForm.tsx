import { IPBlockType, PlatformType } from '@/lib/enums'
import { pointControlOpts } from '@/lib/options'
import { Form, Input, InputNumber, Radio, Select } from 'antd'
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
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  const [controlType, setControlType] = useState(1)

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
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item label="會員帳號">
        <Input />
      </Form.Item>
      <Form.Item label="調節類別">
        <Radio.Group
          options={pointControlOpts}
          defaultValue={1}
          onChange={(e) => setControlType(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="操作類型">
        <Select options={controlType === 1 ? depositOpts : withdrawOpts} />
      </Form.Item>
      <Form.Item label="金額">
        <InputNumber className="w-100" />
      </Form.Item>
      <Form.Item label="備註">
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default DataForm
