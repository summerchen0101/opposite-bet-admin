import { MultipleSelector } from '@/components'
import React from 'react'

const options = [
  { label: '標籤A', value: 'a' },
  { label: '標籤B', value: 'b' },
]
const MemberActivity: React.FC = () => {
  const onChange = () => {}
  return (
    <MultipleSelector
      placeholder="標籤"
      value={[]}
      onChange={onChange}
      options={options}
      width="300px"
    />
  )
}

export default MemberActivity
