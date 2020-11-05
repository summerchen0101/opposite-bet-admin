import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部金流類型', value: 'all' },
  { label: '銀行轉帳', value: 'bank' },
  { label: '微信支付', value: 'wechat' },
]
const BankSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      value="all"
      placeholder="金流類型"
      width="150px"
    />
  )
}

export default BankSelector
