import { LoginFormData } from '@/lib/types'
import { doLogin } from '@/store/reducer'
import { selectLoading, useTypedSelector } from '@/store/selectors'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Space } from 'antd'
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
  account: '',
  password: '',
}

const Login: React.FC = () => {
  const [form] = Form.useForm<LoginFormData>()
  const loading = useTypedSelector(selectLoading)
  const dispatch = useDispatch()
  const onFinish = (data: LoginFormData) => dispatch(doLogin(data))
  return (
    <Wrapper>
      <Card title="後台登入" style={{ width: 300 }}>
        <Form form={form} onFinish={onFinish} initialValues={initialValues}>
          <Form.Item
            label="帳號"
            name="account"
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
