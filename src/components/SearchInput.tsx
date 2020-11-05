import React from 'react'
import { Input, Tooltip } from 'antd'

const { Search } = Input
interface SearchInputProps {
  placeholder?: string
  width?: string
}
const SearchInput: React.FC<SearchInputProps> = ({ placeholder, width }) => {
  const component = (
    <Search placeholder={placeholder} style={{ width: width ?? 200 }} />
  )
  if (placeholder) {
    return <Tooltip title={placeholder}>{component}</Tooltip>
  }
  return component
}

export default SearchInput
