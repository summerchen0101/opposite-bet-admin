import { RadioGroup } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '進行中', value: 'process' },
  { label: '即將到來', value: 'coming' },
  { label: '逾期', value: 'expired' },
  { label: '停用', value: 'deprecated' },
]
const StatusPicker: React.FC = () => {
  return <RadioGroup options={options} value="all" label="狀態" />
}

export default StatusPicker
