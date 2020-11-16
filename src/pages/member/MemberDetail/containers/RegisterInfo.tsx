import { Button, Col, Collapse, Row, Space, Table } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const ColGroup: React.FC<{ label?: any; value?: any }> = ({ label, value }) => (
  <>
    <Col span={4} className="label">
      {label}
    </Col>
    <Col span={8} className="value">
      {value}
    </Col>
  </>
)
const extraButtons = (
  <Space>
    <Button size="small">停用</Button>
    <Button size="small">調節金額</Button>
    <Button size="small">重置密碼</Button>
    <Button size="small">重新註冊</Button>
  </Space>
)
const RegisterInfo: React.FC = (props) => {
  const dispatch = useDispatch()
  return (
    <Collapse {...props}>
      <Collapse.Panel header="註冊資訊" key="1" extra={extraButtons}>
        <Row gutter={16}>
          <ColGroup label="會員帳號" value="-" />
          <ColGroup label="組織資訊" value="-" />
          <ColGroup label="帳號啟用時間" value="-" />
          <ColGroup label="標籤名稱" value="-" />
          <ColGroup label="IP位址" value="-" />
          <ColGroup label="上次登入時間" value="-" />
          <ColGroup label="最後登入裝置" value="-" />
        </Row>
      </Collapse.Panel>
    </Collapse>
  )
}

export default styled(RegisterInfo)`
  .ant-col {
    padding: 5px;
    margin-bottom: 2px;
    &.label {
      background-color: #efefef;
    }
  }
`
