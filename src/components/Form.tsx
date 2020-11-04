import { Form as AntForm, Select } from 'antd'
import React from 'react'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
interface FormProps {
  onFinish?: (values: any) => void
  onFinishFailed?: (errorInfo: any) => void
}
const Form: React.FC<FormProps> = ({ onFinish, onFinishFailed, children }) => {
  const [form] = AntForm.useForm()
  return (
    <AntForm
      {...layout}
      name="basic"
      form={form}
      labelAlign="left"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {children}
    </AntForm>
  )
}

export { default as FormField } from './FormField'
export default Form
