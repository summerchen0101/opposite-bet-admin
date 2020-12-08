import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部公告總類', value: 'all' },
  { label: '跑馬燈', value: 'opt1' },
  { label: '系統通知', value: 'opt2' },
  { label: '賽事公告', value: 'opt3' },
  { label: '活動優惠', value: 'opt4' },
]
const TypeSelector: React.FC = () => {
  return <BasicSelector options={options} value="all" width="150px" />
}

export default TypeSelector
