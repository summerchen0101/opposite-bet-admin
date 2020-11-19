import { Space } from 'antd'
import React from 'react'
import { EyeOutlined, SettingOutlined } from '@ant-design/icons'

const DataFormHeader: React.FC = () => {
  return (
    <h3>
      選擇許可權層級
      <Space style={{ float: 'right', fontWeight: 400, fontSize: '14px' }}>
        <EyeOutlined />
        <span>檢視</span>
        <SettingOutlined />
        <span>管理</span>
      </Space>
    </h3>
  )
}

export default DataFormHeader
