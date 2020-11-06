import React from 'react'
import { Select, Tooltip } from 'antd'

interface Props {
  onChange?: (value: string[], option: any) => void
  options: any[]
  value: any
  width?: string | number
  placeholder?: string
}
const MultipleSelector: React.FC<Props> = ({
  options,
  onChange,
  value,
  width,
  placeholder,
}) => {
  return (
    <Tooltip title={placeholder}>
      <Select
        mode="multiple"
        placeholder={placeholder}
        allowClear
        defaultValue={value}
        onChange={onChange}
        options={options}
        style={{ width: width ?? '250px' }}
      />
    </Tooltip>
  )
}

export default MultipleSelector
