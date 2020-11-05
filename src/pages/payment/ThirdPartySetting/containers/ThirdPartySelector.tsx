import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部金流平台', value: 'all' },
  { label: '89pay', value: '89pay' },
]
const BankSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      value="all"
      placeholder="金流平台"
      width="150px"
    />
  )
}

export default BankSelector
