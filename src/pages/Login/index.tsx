// import { LoginFormData } from '@/lib/types'
import { Login } from '@/types'
import { useAppDispatch } from '@/store'
import { doLogin, fetchUserAndMenu, toggleLoading } from '@/store/reducer'
import { selectLoading, useTypedSelector } from '@/store/selectors'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, message, Space } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const initialValues: Login.FormData = {
  account: '',
  password: '',
}

const LoginComponent: React.FC = () => {
  const [form] = Form.useForm<Login.FormData>()
  const loading = useTypedSelector(selectLoading)
  const dispatch = useAppDispatch()
  const onFinish = async (f: Login.FormData) => {
    const data: Login.RequestProps = {
      username: f.account,
      password: f.password,
    }
    dispatch(toggleLoading(true))
    const action = await dispatch(doLogin(data))
    dispatch(toggleLoading(false))
    if (doLogin.fulfilled.match(action)) {
      dispatch(fetchUserAndMenu())
    } else {
      message.error(action.error.message)
    }
  }
  return (
    <Wrapper>
      <Card title="後台登入" style={{ width: 300 }}>
        <Form form={form} onFinish={onFinish} initialValues={initialValues}>
          <Form.Item
            label="帳號"
            name="account"
            requiredMark={false}
            rules={[{ required: true, message: '請輸入帳號!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="password"
            requiredMark={false}
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

export default LoginComponent
