import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部狀態', value: 'all' },
  { label: '進行中', value: 'opt1' },
  { label: '即將到來', value: 'opt2' },
  { label: '逾期', value: 'opt3' },
  { label: '停用', value: 'opt4' },
]
const StatusSelector: React.FC = () => {
  return <BasicSelector options={options} value="all" width="150px" />
}

export default StatusSelector
