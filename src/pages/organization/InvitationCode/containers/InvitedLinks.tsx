import { Row, Card } from 'antd'
import React from 'react'
import QrcodeBox from '../components/QrcodeBox'

const InvitedLinks: React.FC = () => {
  return (
    <Card title="會員註冊連結">
      <Row gutter={16}>
        <QrcodeBox title="會員註冊連接" url="google.com" />
        <QrcodeBox title="產品首頁" url="google.com" />
      </Row>
    </Card>
  )
}

export default InvitedLinks
