import { Checkbox } from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'

const options = [
  { label: '代理', value: 'agent' },
  { label: '會員', value: 'member' },
]
const StatusPicker: React.FC = () => {
  return (
    <FormItem label="信件總類" className="mb-0">
      <Checkbox.Group options={options} defaultValue={['agent', 'member']} />
    </FormItem>
  )
}

export default StatusPicker
