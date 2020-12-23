import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部類型', value: 'all' },
  { label: '黑名單', value: 'black' },
  { label: '白名單', value: 'white' },
]
const IpTypeSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      value="all"
      placeholder="IP類型"
      width="150px"
    />
  )
}

export default IpTypeSelector
