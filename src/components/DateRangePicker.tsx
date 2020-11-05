import React from 'react'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker
const DateRangePicker: React.FC<{ value?: any }> = ({ value }) => {
  return <RangePicker value={value} />
}

export default DateRangePicker
