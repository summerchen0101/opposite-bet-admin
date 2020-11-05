import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '啟用', value: 'on' },
  { label: '未啟用', value: 'off' },
  { label: '阻擋', value: 'reject' },
  { label: '停用', value: 'stop' },
  { label: '凍結', value: 'frozen' },
]
const MemberActivity: React.FC = () => {
  const onChange = () => {}
  return (
    <BasicSelector
      placeholder="狀態"
      value="all"
      onChange={onChange}
      options={options}
    />
  )
}

export default MemberActivity
