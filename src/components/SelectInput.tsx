import { Input, Select, Tooltip } from 'antd'
import React from 'react'

const typeSelector = (options, value, onChange) => (
  <Select options={options} defaultValue={value} onChange={onChange} />
)
interface SelectInputProps {
  options: { label: string; value: any }[]
  value?: any
  selectedValue?: any
  onSelectedChange?: () => void
  onChange?: () => void
  placeholder?: string
}
const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  selectedValue,
  onSelectedChange,
  onChange,
  placeholder,
}) => {
  const component = (
    <Input
      addonBefore={typeSelector(options, selectedValue, onSelectedChange)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
  if (placeholder) return <Tooltip title={placeholder}>{component}</Tooltip>
  return component
}
export default SelectInput
