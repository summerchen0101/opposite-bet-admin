import { BasicSelector } from '@/components'
import React from 'react'

const options = [{ label: '全部角色', value: 'all' }]
const StatusSelector: React.FC = () => {
  return (
    <BasicSelector options={options} placeholder="管理者角色" value="all" />
  )
}

export default StatusSelector
