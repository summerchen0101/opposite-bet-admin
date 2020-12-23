import { SelectInput } from '@/components'
import React from 'react'

const options = [
  { label: '標籤名稱', value: 'labelName' },
  { label: '更新人員', value: 'operator' },
]
const MemberActivity: React.FC = () => {
  return (
    <SelectInput
      options={options}
      selectedValue="labelName"
      placeholder="搜尋關鍵字"
    />
  )
}

export default MemberActivity
