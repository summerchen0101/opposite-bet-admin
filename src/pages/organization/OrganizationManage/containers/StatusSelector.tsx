import { BasicSelector } from '@/components'
import React from 'react'

const AccountSearch: React.FC = () => {
  const options = [
    { label: '全部', value: 'all' },
    { label: '啟用', value: 'on' },
    { label: '停用', value: 'off' },
  ]
  return <BasicSelector options={options} value="all" placeholder="狀態" />
}

export default AccountSearch
