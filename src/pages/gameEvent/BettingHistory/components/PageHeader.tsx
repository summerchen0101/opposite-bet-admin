import React from 'react'
import PageHeader from '@/components/PageHeader'
import { BettingHistory as page } from '@/pages/gameEvent/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Space } from 'antd'
import styled from 'styled-components'

const MemberResult: React.FC<{
  label: string
  value: number
  color?: string
}> = ({ label, value, ...props }) => {
  return (
    <h5 {...props}>
      {label}： <span className="score">{value}</span>
    </h5>
  )
}

const StyledMemberResult = styled(MemberResult)`
  font-size: 16px;
  margin-bottom: 0;
  line-height: 36px;
  padding: 0 10px;
  background-color: #eee;
  .score {
    color: ${(props) => props.color || '#333'};
  }
`
const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={
        <Space>
          <StyledMemberResult label="會員(贏)" value={123222} color="green" />
          <StyledMemberResult label="會員(輸)" value={202221} color="red" />
        </Space>
      }
    />
  )
}

export default Component
