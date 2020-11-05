import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部狀態', value: 'all' },
  { label: '啟動', value: 'on' },
  { label: '停用', value: 'off' },
]
const StatusSelector: React.FC = () => {
  return <BasicSelector options={options} placeholder="啟用狀態" value="all" />
}

export default StatusSelector
