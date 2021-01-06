import { Button, Form, Input, Radio, Select, Space, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
import {
  useTypedSelector,
  selectCountryOpts,
  selectSportOpts,
} from '../selectors'

export interface FormData {
  id?: number
  name: string
  code: string
  note: string
  country_id: number
  sport_id: number
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  const onReset = () => form.resetFields()

  const statusOpts = [
    { label: '啟用', value: true },
    { label: '停用', value: false },
  ]

  const countryOpts = useTypedSelector(selectCountryOpts)
  const sportOpts = useTypedSelector(selectSportOpts)

  return (
    <Form
      layout="vertical"
      form={form}
      onReset={onReset}
      initialValues={values}
    >
      <Form.Item label="國家" name="country_id" rules={[{ required: true }]}>
        <Select
          options={countryOpts}
          placeholder="請選擇"
          disabled={!!values.id}
        />
      </Form.Item>
      <Form.Item label="體育" name="sport_id" rules={[{ required: true }]}>
        <Select
          options={sportOpts}
          placeholder="請選擇"
          disabled={!!values.id}
        />
      </Form.Item>
      <Form.Item
        label="名稱"
        name="name"
        rules={[{ required: true }, { max: 30 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="代碼"
        name="code"
        rules={[{ required: true }, { max: 10 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="備註" name="note" rules={[{ max: 30 }]}>
        <Input />
      </Form.Item>
      <Form.Item label="狀態" name="is_active">
        <Radio.Group options={statusOpts} />
      </Form.Item>
    </Form>
  )
}

export default DataForm
