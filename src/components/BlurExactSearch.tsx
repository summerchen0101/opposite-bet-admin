import React, { useState } from 'react'
import { Input, Tooltip } from 'antd'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import IconLink from '@/components/IconLink'
interface TypeSearchProps {
  value?: string
  onClick: () => void
  label: string
  icon: JSX.Element
  placeholder?: string
}

const TypeSearch: React.FC<TypeSearchProps> = ({
  label,
  value,
  onClick,
  icon,
  placeholder,
}) => {
  const tips = placeholder ? `${placeholder} (${label})` : label
  return (
    <Tooltip title={tips}>
      <Input
        placeholder={tips}
        defaultValue={value}
        addonBefore={<IconLink icon={icon} onClick={onClick} />}
      />
    </Tooltip>
  )
}

interface BlueExactSearchProps {
  value?: string
  placeholder?: string
}

const BlurExactSearch: React.FC<BlueExactSearchProps> = (props) => {
  const [mode, setMode] = useState('blur')
  if (mode === 'blur') {
    return (
      <TypeSearch
        label="模糊搜尋"
        icon={<EyeInvisibleOutlined />}
        onClick={() => setMode('exact')}
        {...props}
      />
    )
  }
  return (
    <TypeSearch
      label="精準搜尋"
      icon={<EyeOutlined />}
      onClick={() => setMode('blur')}
      {...props}
    />
  )
}

export default BlurExactSearch
