import { Col, Form, Input, Row, Select, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React from 'react'
import {
  selectPermissionOpts,
  selectRoleOpts,
  useTypedSelector,
} from '../selectors'

export interface FormData {
  id?: number
  acc: string
  pass: string
  pass_c: string
  name: string
  role_ids: number[]
  permission_ids: number[]
  is_active: boolean
  is_lock: boolean
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
  const roleOpts = useTypedSelector(selectRoleOpts).map((t) => ({
    label: t.name,
    value: t.id,
  }))

  const activeOpts = [
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
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="管理者帳號" name="acc">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="真實姓名" name="name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="密碼" name="pass">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="確認密碼" name="pass_c">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="角色" name="role_ids">
            <Select mode="multiple" options={roleOpts} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="權限" name="permission_ids">
            <Select mode="multiple" options={permissionOpts} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="狀態" name="is_active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="鎖定" name="is_lock" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
