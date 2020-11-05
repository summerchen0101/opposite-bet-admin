import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '初始狀態', value: 'init' },
  { label: '確認入款', value: 'confirm' },
  { label: '手動入款', value: 'manual' },
  { label: '入款失敗', value: 'failed' },
  { label: '等待入款', value: 'waiting' },
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
