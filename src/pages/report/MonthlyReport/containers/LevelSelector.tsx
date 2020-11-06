import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部層級', value: 'all' },
  { label: '代理商', value: 'agentCompany' },
  { label: '總代理', value: 'agentMaster' },
  { label: '代理', value: 'agent' },
  { label: '會員', value: 'member' },
]
const LevelSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      value="all"
      placeholder="層級"
      width="150px"
    />
  )
}

export default LevelSelector
