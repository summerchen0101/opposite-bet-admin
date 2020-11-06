import { ButtonGroup } from '@/components'
import React from 'react'

const options = [
  { label: '寄件夾', value: 'opt1' },
  { label: '收件夾', value: 'opt2' },
]
const TypeButtons: React.FC = () => {
  const onChange = () => {}
  return <ButtonGroup options={options} value="opt1" />
}

export default TypeButtons
