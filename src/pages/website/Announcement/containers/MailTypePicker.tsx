import { MultipleSelector, RadioGroup } from '@/components'
import React from 'react'

const options = [
  { label: '私信', value: 'private' },
  { label: '代理', value: 'agent' },
  { label: '會員', value: 'member' },
  { label: '系統信', value: 'system' },
]
const MailTypePicker: React.FC = () => {
  return (
    <MultipleSelector options={options} value={[]} placeholder="信件種類" />
  )
}

export default MailTypePicker
