import { OptionalDateRangePicker } from '@/components'
import React from 'react'

const options = [{ label: '存提日期', value: '' }]
const DepositDateRangePicker: React.FC = (props) => {
  return <OptionalDateRangePicker options={options} selectedValue="" />
}

export default DepositDateRangePicker
