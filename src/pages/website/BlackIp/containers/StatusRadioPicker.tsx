import RadioGroup from '@/components/RadioGroup'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '允許', value: 'allow' },
  { label: '阻擋', value: 'stop' },
]
const StatusRadioPicker: React.FC = () => {
  return <RadioGroup label="狀態" options={options} value="all" />
}

export default StatusRadioPicker
