import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部語系', value: 'all' },
  { label: '簡體中文', value: 'cn' },
]
const LanguageSelector: React.FC = () => {
  return (
    <BasicSelector
      options={options}
      value="all"
      placeholder="語系"
      width="150px"
    />
  )
}

export default LanguageSelector
