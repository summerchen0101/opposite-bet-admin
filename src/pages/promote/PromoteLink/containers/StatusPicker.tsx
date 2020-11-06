import { RadioGroup } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '開啟', value: 'open' },
  { label: '未開啟', value: 'close' },
]
const StatusPicker: React.FC = () => {
  return <RadioGroup options={options} value="all" label="狀態" />
}

export default StatusPicker
