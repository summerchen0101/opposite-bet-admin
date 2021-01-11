import { Status } from '@/lib/enums'
import { statusOpts } from '@/lib/options'
import { Form, Input, Radio, Select } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
import {
  selectPermissionOpts,
  selectRoleOpts,
  selectTableData,
  useTypedSelector,
} from '../selectors'

export interface MenuFormData {
  id?: number
  parent_id?: number
  name: string
  path: string
  icon: string
  permission_ids: number[]
  role_ids: number[]
  is_active: Status
}
interface FormProps {
  form: FormInstance<MenuFormData>
  values?: MenuFormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  const onReset = () => form.resetFields()
  const permissionOpts = useTypedSelector(selectPermissionOpts)
  const roleOpts = useTypedSelector(selectRoleOpts)
  const rootMenus = useTypedSelector(selectTableData)

  return (
    <Form
      layout="vertical"
      form={form}
      onReset={onReset}
      initialValues={values}
    >
      <Form.Item label="上層" name="parent_id">
        <Select
          options={rootMenus
            .filter((t) => t.id !== values.id)
            .map((t) => ({ label: t.name, value: t.id }))}
          placeholder="請選擇上層"
          allowClear
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
        label="路徑"
        name="path"
        rules={[{ required: true }, { max: 30 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="圖示" name="icon" rules={[{ max: 30 }]}>
        <Input />
      </Form.Item>
      <Form.Item label="權限" name="permission_ids">
        <Select mode="multiple" options={permissionOpts} />
      </Form.Item>
      <Form.Item label="角色" name="role_ids">
        <Select mode="multiple" options={roleOpts} />
      </Form.Item>
      <Form.Item label="狀態" name="is_active">
        <Radio.Group options={statusOpts.filter((t) => t.value !== 0)} />
      </Form.Item>
    </Form>
  )
}

export default DataForm
