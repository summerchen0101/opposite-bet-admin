import { Tooltip } from 'antd'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'
interface IProps {
  icon: JSX.Element
  label?: string
  style?: CSSProperties
  onClick?: () => void
  color?: string
}
const CursorWrapper = styled.span`
  cursor: pointer;
  color: ${({ color }) => color};
`
const IconLink: React.FC<IProps> = ({ icon, label, ...props }) => {
  if (!label) return <CursorWrapper {...props}>{icon}</CursorWrapper>
  return (
    <Tooltip title={label}>
      <CursorWrapper {...props}>{icon}</CursorWrapper>
    </Tooltip>
  )
}

export default IconLink
