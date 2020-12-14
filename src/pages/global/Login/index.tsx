// import { LoginFormData } from '@/lib/types'

import API from '@/API'
import { useAppDispatch } from '@/store'
import { setLogout, setLogin } from '@/store/reducer'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, message, Space } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ErrorCallback } from 'typescript'

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoginComponent: React.FC = () => {
  const dispatch = useAppDispatch()
  const { apiErr } = useErrorHandler()
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const onFinish = async (formData) => {
    setLoading(true)
    try {
      await API.login(formData)
      await API.checkLogin()
      dispatch(setLogin())
    } catch (err) {
      apiErr(err)
    }
    setLoading(false)
  }
  return (
    <Wrapper>
      <Card title="後台登入" style={{ width: 300 }}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="帳號"
            name="acc"
            rules={[{ required: true, message: '請輸入帳號!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="pass"
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
