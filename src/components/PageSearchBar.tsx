import React from 'react'
import { Space } from 'antd'

const PageSearchBar: React.FC<{ extra?: React.ReactNode }> = ({
  children,
  extra,
  ...props
}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Space size="small" {...props}>
        {children}
      </Space>
      {extra}
    </div>
  )
}

export default PageSearchBar
