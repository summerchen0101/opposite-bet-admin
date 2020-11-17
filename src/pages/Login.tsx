import React, { useState } from 'react'
import { Card, Form, Input, Button, message, Space } from 'antd'
import styled from 'styled-components'
import * as api from '@/utils/apiService'
import { LoadingOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import useService from '@/utils/hooks/useService'
import errCodes from '@/lib/errCodes'
import { fetchUserAndMenu } from '@/store/reducer'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  // const history = useHistory()
  const { fetchMenuInfo } = useService()
  const onFinish = async (data) => {
    try {
      setIsLoading(true)
      const res = await api.login(data)
      setIsLoading(false)
      if (res.result === 'LOGIN_SUCCESS') {
        sessionStorage.setItem('token', res.token)
        dispatch(fetchUserAndMenu())
      } else {
        message.error(errCodes[res.result])
      }
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }
  return (
    <Wrapper>
      <Card title="後台登入" style={{ width: 300 }}>
        <Form onFinish={onFinish}>
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
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              <Space>
                登入
                {isLoading && <LoadingOutlined />}
              </Space>
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  )
}

export default Login
