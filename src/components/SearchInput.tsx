import React from 'react'
import { Input, Tooltip } from 'antd'

const { Search } = Input
const RelativeDateBtns: React.FC<{ placeholder?: string }> = ({
  placeholder,
}) => {
  const component = <Search placeholder={placeholder} style={{ width: 200 }} />
  if (placeholder) {
    return <Tooltip title={placeholder}>{component}</Tooltip>
  }
  return component
}

export default RelativeDateBtns
