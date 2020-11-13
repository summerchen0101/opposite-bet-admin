import { ButtonGroup } from '@/components'
import React from 'react'

const options = [
  { label: '寄件夾', value: 'opt1' },
  { label: '收件夾', value: 'opt2' },
]
const TypeButtons: React.FC<{
  value: string
  onChange: (e) => void
}> = ({ value, onChange }) => {
  return <ButtonGroup options={options} onChange={onChange} value={value} />
}

export default TypeButtons
