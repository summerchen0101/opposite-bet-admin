import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '等待', value: 'waiting' },
  { label: '擱置', value: 'hold' },
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
      placeholder="銀行帳號"
      width="120px"
    />
  )
}

export default StatusSelector
