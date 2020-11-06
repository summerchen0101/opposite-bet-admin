import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部狀態', value: 'all' },
  { label: '已過帳', value: 'done' },
  { label: '未過帳', value: 'process' },
]
const BankSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      value="all"
      placeholder="狀態"
      width="150px"
    />
  )
}

export default BankSelector
