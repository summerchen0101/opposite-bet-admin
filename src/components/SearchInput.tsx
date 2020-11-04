import React from 'react'
import { Input } from 'antd'

const { Search } = Input
const RelativeDateBtns: React.FC<{ placeholder: string }> = ({
  placeholder,
}) => {
  return <Search placeholder={placeholder} style={{ width: 200 }} />
}

export default RelativeDateBtns
