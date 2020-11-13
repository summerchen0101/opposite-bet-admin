import { RadioGroup } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '讀取', value: 'read' },
  { label: '未讀取', value: 'unread' },
]
const StatusPicker: React.FC = () => {
  return <RadioGroup options={options} value="all" label="讀取狀態" />
}

export default StatusPicker
