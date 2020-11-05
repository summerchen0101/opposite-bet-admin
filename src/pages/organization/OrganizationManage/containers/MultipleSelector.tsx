import MultipleSelector from '@/components/MultipleSelector'
import React from 'react'

const options = [{ label: '加盟主', value: 'a' }]
const MemberActivity: React.FC = () => {
  const onChange = () => {}
  return (
    <MultipleSelector
      value={['a']}
      onChange={onChange}
      options={options}
      width="300px"
      placeholder="組織層級"
    />
  )
}

export default MemberActivity
