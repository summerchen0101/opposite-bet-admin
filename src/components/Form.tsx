import { Form as AntForm, Select } from 'antd'
import { FormProps } from 'antd/lib/form'
import React from 'react'
import styled from 'styled-components'

const Form: React.FC<FormProps> = (props) => {
  const [form] = AntForm.useForm()
  return (
    <AntForm
      name="basic"
      form={form}
      layout="vertical"
      initialValues={{ remember: true }}
      {...props}
    />
  )
}

export { default as FormField } from './FormField'
export default styled(Form)`
  .ant-form-item {
    margin-bottom: 15px;
  }
`
