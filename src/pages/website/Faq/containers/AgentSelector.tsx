import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部代理商', value: 'all' },
  { label: 'AG', value: 'ag' },
  { label: 'MS19', value: 'ms19' },
]
const AgentSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      value="all"
      placeholder="代理商"
      width="150px"
    />
  )
}

export default AgentSelector
