import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Login: React.FC = () => {
  return (
    <Wrapper>
      <Card title="後台登入" style={{ width: 300 }}>
        <Form>
          <Form.Item
            label="帳號"
            name="username"
            rules={[{ required: true, message: '請輸入帳號!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="password"
            rules={[{ required: true, message: '請輸入密碼!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登入
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  )
}

export default Login
