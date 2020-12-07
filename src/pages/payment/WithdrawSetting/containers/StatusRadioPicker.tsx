import RadioGroup from '@/components/RadioGroup'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '啟用', value: 'on' },
  { label: '停用', value: 'off' },
]
const StatusRadioPicker: React.FC = () => {
  return <RadioGroup label="狀態" options={options} value="all" />
}

export default StatusRadioPicker
