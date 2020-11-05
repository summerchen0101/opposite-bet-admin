import React, { useState } from 'react'
import { Input, Tooltip } from 'antd'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import IconLink from '@/components/IconLink'
interface TypeSearchProps {
  value: string
  onClick: () => void
  label: string
  icon: JSX.Element
}

const TypeSearch: React.FC<TypeSearchProps> = ({
  label,
  value,
  onClick,
  icon,
}) => {
  return (
    <Input
      placeholder={label}
      defaultValue={value}
      addonBefore={
        <Tooltip title={label}>
          <IconLink icon={icon} onClick={onClick} />
        </Tooltip>
      }
    />
  )
}

const BlurExactSearch: React.FC<{ value: string }> = ({ value }) => {
  const [mode, setMode] = useState('blur')
  if (mode === 'blur') {
    return (
      <TypeSearch
        label="模糊搜尋"
        value={value}
        icon={<EyeInvisibleOutlined />}
        onClick={() => setMode('exact')}
      />
    )
  }
  return (
    <TypeSearch
      label="精準搜尋"
      value={value}
      icon={<EyeOutlined />}
      onClick={() => setMode('blur')}
    />
  )
}

export default BlurExactSearch
