import { Button, Input, Select, Space } from 'antd'
import React from 'react'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { OptionType } from 'antd/lib/select'

const ModifyPopover: React.FC = ({ children }) => {
  return (
    <Space>
      {/* <Input defaultValue={value} /> */}
      {children}
      <Button icon={<CloseOutlined />} />
      <Button type="primary" icon={<CheckOutlined />} />
    </Space>
  )
}

interface InputProps {
  value: any
}
interface SelectProps {
  value: any
  options: { label: any; value: any }[]
}

export const InputModifyPopover: React.FC<InputProps> = ({ value }) => {
  return (
    <ModifyPopover>
      <Input defaultValue={value} />
    </ModifyPopover>
  )
}
export const SelectModifyPopover: React.FC<SelectProps> = ({
  value,
  options,
}) => {
  return (
    <ModifyPopover>
      <Select
        defaultValue={value}
        options={options}
        style={{ minWidth: 100 }}
      />
    </ModifyPopover>
  )
}

export default ModifyPopover
