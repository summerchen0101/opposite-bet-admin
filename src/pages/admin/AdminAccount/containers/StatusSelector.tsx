import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部狀態', value: 'all' },
  { label: '啟動', value: 'on' },
  { label: '未啟動', value: 'off' },
  { label: '停用', value: 'stop' },
  { label: '凍結', value: 'frozen' },
]
const StatusSelector: React.FC = () => {
  return <BasicSelector options={options} placeholder="狀態" value="all" />
}

export default StatusSelector
