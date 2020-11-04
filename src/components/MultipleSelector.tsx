import React from 'react'
import { Select } from 'antd'

interface Props {
  onChange: (value: string[], option: any) => void
  options: any[]
  value: any
  width: string | number
}
const DateRangePicker: React.FC<Props> = ({
  options,
  onChange,
  value,
  width,
}) => {
  return (
    <Select
      mode="multiple"
      allowClear
      defaultValue={value}
      onChange={onChange}
      options={options}
      style={{ width: width ?? '250px' }}
    />
  )
}

export default DateRangePicker
