import MultipleSelector from '@/components/MultipleSelector'
import { Checkbox, Space } from 'antd'
import React from 'react'

const options = [
  { label: 'aaaa(小白)', value: 'aaaa' },
  { label: 'gogoro(Gogo))', value: 'gogoro' },
]
const AgentMultiSelector: React.FC = () => {
  const onChange = () => {}
  return (
    <MultipleSelector
      value={['aaaa', 'gogoro']}
      onChange={onChange}
      options={options}
      width="350px"
      placeholder="代理商"
    />
  )
}

export default AgentMultiSelector
