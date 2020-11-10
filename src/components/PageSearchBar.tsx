import React from 'react'
import { Space } from 'antd'
import styled from 'styled-components'
const ExtraWrapper = styled.span`
  float: right;
`
const PageSearchBar: React.FC<{
  extra?: JSX.Element
  style?: React.CSSProperties
}> = ({ children, extra, style, ...props }) => {
  return (
    <div style={{ marginBottom: 20, ...style }}>
      <Space size="small" {...props}>
        {children}
      </Space>
      <ExtraWrapper>{extra}</ExtraWrapper>
    </div>
  )
}

export default PageSearchBar
