import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '廠商', value: 'a' },
  { label: '股東', value: 'b' },
  { label: '總代', value: 'c' },
  { label: '代理', value: 'd' },
  { label: '會員', value: 'e' },
]
const LevelSelector: React.FC = () => {
  return <BasicSelector options={options} value="a" placeholder="層級管理" />
}

export default LevelSelector
