import { Radio } from 'antd'
import React from 'react'

interface ButtonGroupProps {
  onChange?: () => any
  value?: any
  options: any[]
  label?: string
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onChange,
  value,
  options,
}) => {
  return (
    <Radio.Group
      options={options}
      onChange={onChange}
      defaultValue={value}
      optionType="button"
      buttonStyle="solid"
    />
  )
}

export default ButtonGroup
