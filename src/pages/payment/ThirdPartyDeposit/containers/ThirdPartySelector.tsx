import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '金流一號', value: 'option1' },
]
const BankSelector: React.FC = () => {
  const onChange = () => {}
  return (
    <BasicSelector
      value={'all'}
      onChange={onChange}
      options={options}
      placeholder="金流設定"
      width="150px"
    />
  )
}

export default BankSelector
