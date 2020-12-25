import React from 'react'
import { Button, Space } from 'antd'

const RelativeDateBtns: React.FC = (props) => {
  return (
    <Space size="small" {...props}>
      <Button>本日</Button>
      <Button>昨日</Button>
      <Button>本週</Button>
      <Button>上週</Button>
      <Button>本月</Button>
      <Button>上月</Button>
    </Space>
  )
}

export default RelativeDateBtns
