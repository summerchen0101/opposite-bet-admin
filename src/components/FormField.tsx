import { Form as AntForm } from 'antd'
import { FormItemProps } from 'antd/lib/form'
import { NamePath } from 'antd/lib/form/interface'
import React from 'react'

interface FormFieldProp {
  label?: React.ReactNode
  name?: NamePath
  required?: boolean
  style?: React.CSSProperties
}

const FormField: React.FC<FormFieldProp & FormItemProps> = ({
  children,
  ...props
}) => {
  return <AntForm.Item {...props}>{children}</AntForm.Item>
}

export default FormField
