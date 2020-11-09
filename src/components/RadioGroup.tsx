import React from 'react'
import { Button, Radio, Space, Tooltip } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'

interface RadioGroupProps {
  onChange?: (e: RadioChangeEvent) => void
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
  const component = (
    <Radio.Group options={options} onChange={onChange} defaultValue={value} />
  )
  if (label) {
    return (
      <Space>
        <label>{label}：</label>
        {component}
      </Space>
    )
  }
  return component
}

export default RadioGroup
