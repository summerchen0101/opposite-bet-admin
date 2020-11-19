import Form, { FormField } from '@/components/Form'
import { DataDataFormProps } from '@/lib/types'
import { Button, Input, Space } from 'antd'
import React from 'react'
import DataFormHeader from '../components/DataFormHeader'
import PermissionTable from './PermissionTable'
import { Form as AntForm } from 'antd'

const DataForm: React.FC<DataDataFormProps> = ({
  onFinish,
  onFinishFailed,
  values,
}) => {
  const [form] = AntForm.useForm()
  const onReset = () => form.resetFields()
  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={values}
      onReset={onReset}
    >
      <FormField label="角色名稱" name="name" required>
        <Input />
      </FormField>
      <DataFormHeader />
      <PermissionTable />
      <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
        <Space size="large">
          <Button htmlType="reset">重置</Button>
          <Button type="primary" htmlType="submit">
            送出
          </Button>
        </Space>
      </FormField>
    </Form>
  )
}

export default DataForm
