import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部狀態', value: 'all' },
  { label: '待批', value: 'waiting' },
  { label: '批准', value: 'confirm' },
  { label: '扣押', value: 'seize' },
  { label: '拒絕', value: 'reject' },
  { label: '已出款', value: 'done' },
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
