import { Button, Col } from 'antd'
import React from 'react'
import { CopyOutlined } from '@ant-design/icons'
import { IconLink } from '@/components'

const QrcodeBox: React.FC<{ title: string; url: string }> = ({
  title,
  url,
}) => {
  return (
    <Col span={12} style={{ textAlign: 'center' }}>
      <p style={{ textAlign: 'left' }}>
        {title}:{url}
        <IconLink style={{ marginLeft: '10px' }} icon={<CopyOutlined />} />
      </p>
      <img src="https://via.placeholder.com/250" style={{ width: '100%' }} />
      <div style={{ marginTop: '10px' }}></div>
      <Button type="primary">下載QRCode</Button>
    </Col>
  )
}

export default QrcodeBox
