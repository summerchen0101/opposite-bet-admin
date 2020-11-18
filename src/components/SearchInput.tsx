import React from 'react'
import { Input, Tooltip } from 'antd'

const { Search } = Input
interface SearchInputProps {
  placeholder?: string
  width?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  defaultValue?: any
}
const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  width,
  onChange,
  defaultValue,
}) => {
  const component = (
    <Search
      placeholder={placeholder}
      onChange={onChange}
      style={{ width: width ?? 200 }}
      defaultValue={defaultValue}
    />
  )
  if (placeholder) {
    return <Tooltip title={placeholder}>{component}</Tooltip>
  }
  return component
}

export default SearchInput
