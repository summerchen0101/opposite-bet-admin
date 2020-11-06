import { RadioGroup } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '私信', value: 'private' },
  { label: '代理', value: 'agent' },
  { label: '會員', value: 'member' },
  { label: '系統信', value: 'system' },
]
const MailTypePicker: React.FC = () => {
  return <RadioGroup options={options} value="all" label="信件種類" />
}

export default MailTypePicker
