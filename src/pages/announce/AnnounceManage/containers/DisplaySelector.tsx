import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '前台顯示(啟/停用)', value: 'all' },
  { label: '啟用', value: 'opt1' },
  { label: '停用', value: 'opt2' },
]
const DisplaySelector: React.FC = () => {
  return <BasicSelector options={options} value="all" width="150px" />
}

export default DisplaySelector
