import { RadioGroup } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '代理', value: 'agent' },
  { label: '會員', value: 'member' },
]
const StatusPicker: React.FC = () => {
  return <RadioGroup options={options} value="all" label="信件種類" />
}

export default StatusPicker
