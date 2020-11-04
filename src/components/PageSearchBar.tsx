import React from 'react'
import { Space } from 'antd'

const PageSearchBar: React.FC<{
  extra?: React.ReactNode
  style?: React.CSSProperties
}> = ({ children, extra, style, ...props }) => {
  return (
    <div style={{ marginBottom: 20, ...style }}>
      <Space size="small" {...props}>
        {children}
      </Space>
      {extra}
    </div>
  )
}

export default PageSearchBar
