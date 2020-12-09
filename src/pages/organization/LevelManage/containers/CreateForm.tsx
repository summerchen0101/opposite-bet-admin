import { Protocal, Status } from '@/lib/enums'
import { Col, Form, Input, Radio, Row, Select } from 'antd'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'

const CreateForm: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const protocolOpts = Object.values(Protocal).map((v) => ({
    label: v,
    value: v,
  }))
  const statusOpts = [
    { label: Status.ON, value: 'ON' },
    { label: Status.OFF, value: 'OFF' },
  ]
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label={`${currentLevel}帳號`} name="account">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="名稱" name="nick">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="密碼" name="pw">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="確認密碼" name="pw_confirm">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="官網" name="host">
            <Input
              addonBefore={
                <Select
                  options={protocolOpts}
                  style={{ width: '100px' }}
                  defaultValue="http://"
                />
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="狀態" name="status" initialValue="ON">
            <Radio.Group options={statusOpts} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateForm
