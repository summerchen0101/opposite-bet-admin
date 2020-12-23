import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Col, Input, Radio, Row, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
const { Option } = Select
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal visible={isDisplay} title="新增黑(白)名單" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="類型" required>
              <Select placeholder="請選擇" allowClear defaultValue="opt1">
                <Option value="opt1">全部</Option>
                <Option value="opt2">黑名單</Option>
                <Option value="opt3">白名單</Option>
              </Select>
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" required>
              <Radio.Group defaultValue="opt1">
                <Radio value="opt1">允許</Radio>
                <Radio value="opt2">阻擋</Radio>
              </Radio.Group>
            </FormField>
          </Col>
        </Row>

        <FormField
          label="IP"
          required
          extra="請使用 IP_V4 格式，例如 192.168.1.1 (0~255.0~255.0~255.0~255)"
        >
          <Input />
        </FormField>
        <FormField label="國別" name="country">
          <Input placeholder="無" />
        </FormField>
        <FormField label="備註">
          <Input.TextArea />
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
