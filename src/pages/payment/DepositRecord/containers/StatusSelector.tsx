import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部狀態', value: 'all' },
  { label: '等待', value: 'waiting' },
  { label: '通過', value: 'ok' },
  { label: '拒絕', value: 'reject' },
]
const StatusSelector: React.FC = () => {
  const onChange = () => {}
  return (
    <BasicSelector
      value={'all'}
      onChange={onChange}
      options={options}
      placeholder="狀態"
      width="120px"
    />
  )
}

export default StatusSelector
