import { LevelCode, Protocal, Status } from '@/lib/enums'
import {
  getLevelName,
  getParentLevelCodes,
  localizeMessage,
} from '@/utils/transfer'
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
    { label: localizeMessage('status.on'), value: Status.ON },
    { label: localizeMessage('status.off'), value: Status.OFF },
  ]
  const parents = getParentLevelCodes(currentLevel)
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        {currentLevel !== LevelCode.Vendor && (
          <>
            <Col span={24}>
              <Form.Item label="組織層級">
                {parents.map((code, i) => {
                  return (
                    <span key={code}>
                      <span>abCC1xx[{getLevelName(code)}]</span>
                      {i < parents.length - 1 && ' / '}
                    </span>
                  )
                })}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="帳號角色" name="role" initialValue="normal">
                <Radio.Group>
                  <Radio value="sub">子帳號</Radio>
                  <Radio value="normal">{getLevelName(currentLevel)}</Radio>
                  <Radio value="testing">
                    測試{getLevelName(currentLevel)}
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </>
        )}

        <Col span={12}>
          <Form.Item
            label={<>{getLevelName(currentLevel)}帳號</>}
            name="account"
          >
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
        {currentLevel === LevelCode.Vendor && (
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
        )}
        <Col span={12}>
          <Form.Item label="狀態" name="status" initialValue={Status.ON}>
            <Radio.Group options={statusOpts} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default CreateForm
