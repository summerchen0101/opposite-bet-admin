import { OptionalDateRangePicker } from '@/components'
import React from 'react'

const options = [
  { label: '申請時間', value: 'applyAt' },
  { label: '稽核時間', value: 'reviewAt' },
]
const DepositDateRangePicker: React.FC = (props) => {
  return <OptionalDateRangePicker options={options} selectedValue="applyAt" />
}

export default DepositDateRangePicker
