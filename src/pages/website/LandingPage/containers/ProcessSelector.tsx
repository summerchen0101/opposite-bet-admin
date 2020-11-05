import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部階段', value: 'all' },
  { label: '進行中', value: 'process' },
  { label: '即將到來', value: 'coming' },
  { label: '逾期', value: 'expired' },
  { label: '停用', value: 'stop' },
]
const ProcessSelector: React.FC = () => {
  return <BasicSelector options={options} placeholder="階段狀態" value="all" />
}

export default ProcessSelector
