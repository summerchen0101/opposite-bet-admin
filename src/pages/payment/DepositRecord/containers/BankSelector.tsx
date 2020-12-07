import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部銀行帳號', value: 'all' },
  { label: '銀行帳號123', value: 'option1' },
]
const BankSelector: React.FC = () => {
  const onChange = () => {}
  return (
    <BasicSelector
      value={'all'}
      onChange={onChange}
      options={options}
      placeholder="銀行帳號"
    />
  )
}

export default BankSelector
