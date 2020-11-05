import React from 'react'
import { Button, Radio, Space, Tooltip } from 'antd'

interface RadioGroupProps {
  onChange?: () => any
  value?: any
  options: any[]
  label?: string
}
const RadioGroup: React.FC<RadioGroupProps> = ({
  onChange,
  value,
  options,
  label,
}) => {
  return (
    <Space size="large">
      <label>{label}：</label>
      <Radio.Group options={options} onChange={onChange} defaultValue={value} />
    </Space>
  )
}

export default RadioGroup
