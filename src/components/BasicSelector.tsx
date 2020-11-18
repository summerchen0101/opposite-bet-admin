import React from 'react'
import { Select, Tooltip } from 'antd'

interface Props {
  onChange?: (value: any, option: any) => void
  options: any[]
  value?: any
  width?: string | number
  placeholder?: string
  style?: React.CSSProperties
}
const BasicSelector: React.FC<Props> = ({
  options,
  onChange,
  value,
  width,
  placeholder,
}) => {
  return (
    <Tooltip title={placeholder}>
      <Select
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        options={options}
        style={{ width: width ?? '180px' }}
      />
    </Tooltip>
  )
}

export default BasicSelector
