import { MultipleSelector } from '@/components'
import React from 'react'

const options = [
  { label: 'aaaa(小白)', value: 'aaaa' },
  { label: 'gogoro(Gogo))', value: 'gogoro' },
]
const MemberActivity: React.FC = () => {
  const onChange = () => {}
  return (
    <MultipleSelector
      placeholder="代理商"
      value={[]}
      onChange={onChange}
      options={options}
      width="300px"
    />
  )
}

export default MemberActivity
