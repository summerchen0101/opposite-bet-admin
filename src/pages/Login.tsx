import { LoginFormData } from '@/lib/types'
import {
  fetchUserAndMenu,
  toggleLoading,
  toggleLoginStatus,
} from '@/store/reducer'
import { selectLoading, useTypedSelector } from '@/store/selectors'
import * as apis from '@/utils/apiServices'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, message, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const initialValues: LoginFormData = {
  username: '',
  password: '',
}

const Login: React.FC = () => {
  const [form] = Form.useForm<LoginFormData>()
  const loading = useTypedSelector(selectLoading)
  const dispatch = useDispatch()
  const onFinish = async (data: LoginFormData) => {
    dispatch(toggleLoading(true))
    try {
      await apis.login(data)
      dispatch(toggleLoginStatus(true))
      dispatch(fetchUserAndMenu())
    } catch (err) {
      message.error(err.message ?? '錯誤發生')
    }
    dispatch(toggleLoading(false))
  }
  return (
    <Wrapper>
      <Card title="後台登入" style={{ width: 300 }}>
        <Form form={form} onFinish={onFinish} initialValues={initialValues}>
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
            <Button type="primary" htmlType="submit" disabled={loading}>
              <Space>
                登入
                {loading && <LoadingOutlined />}
              </Space>
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  )
}

export default Login
