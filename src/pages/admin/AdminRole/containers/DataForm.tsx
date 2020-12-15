import { Button, Form, Input, Radio, Select, Space, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React from 'react'
import { useTypedSelector, selectPermissionOpts } from '../selectors'

export interface FormData {
  id?: number
  name: string
  permission_ids: number[]
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  const onReset = () => form.resetFields()
  const permissionOpts = useTypedSelector(selectPermissionOpts).map((t) => ({
    label: t.name,
    value: t.id,
  }))

  const statusOpts = [
    { label: '啟用', value: true },
    { label: '停用', value: false },
  ]

  return (
    <Form
      layout="vertical"
      form={form}
      onReset={onReset}
      initialValues={values}
    >
      <Form.Item label="角色名稱" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="權限"
        name="permission_ids"
        rules={[{ required: true }]}
      >
        <Select mode="multiple" options={permissionOpts} />
      </Form.Item>
      <Form.Item label="狀態" name="is_active">
        <Radio.Group options={statusOpts} />
      </Form.Item>
    </Form>
  )
}

export default DataForm
