import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { MemberManage, AgentManage } from '../../routes'
import { HomeOutlined } from '@ant-design/icons'

const LevelTree: React.FC = () => {
  return (
    <Breadcrumb className="mb-1">
      <Breadcrumb.Item>
        <Link to={AgentManage.path}>
          <HomeOutlined />
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={AgentManage.path}>abc123[廠商]</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>gogo123[股東]</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default LevelTree
