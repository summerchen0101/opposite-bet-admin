import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部銀行', value: 'all' },
  { label: '中國信託(822)', value: '822' },
  { label: '國泰世華(013)', value: '013' },
]
const BankSelector: React.FC = () => {
  return <BasicSelector options={options} value="all" placeholder="銀行名稱" />
}

export default BankSelector
