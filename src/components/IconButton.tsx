import React from 'react'
import { Button, Tooltip } from 'antd'

interface IconButtonProps {
  onClick?: () => any
  icon: JSX.Element
  label?: string
}
const IconButton: React.FC<IconButtonProps> = ({ onClick, icon, label }) => {
  const button = <Button onClick={onClick} icon={icon} />
  if (label) {
    return <Tooltip title={label}>{button}</Tooltip>
  }
  return button
}

export default IconButton
