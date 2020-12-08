import { RadioGroup } from '@/components'
import { RadioChangeEvent } from 'antd/lib/radio'
import React from 'react'

const options = [
  { label: '寄件夾', value: 'opt1' },
  { label: '收件夾', value: 'opt2' },
]
interface TypePickerProps {
  value?: string
  onChange?: (e: RadioChangeEvent) => void
}
const TypePicker: React.FC<TypePickerProps> = ({ value, onChange }) => {
  return (
    <RadioGroup options={options} value={value ?? 'opt1'} onChange={onChange} />
  )
}

export default TypePicker
