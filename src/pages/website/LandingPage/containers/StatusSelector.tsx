import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '前台顯示(全部)', value: 'all' },
  { label: '顯示', value: 'on' },
  { label: '關閉', value: 'off' },
]
const StatusSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      placeholder="前台顯示"
      value="all"
      width="150px"
    />
  )
}

export default StatusSelector
