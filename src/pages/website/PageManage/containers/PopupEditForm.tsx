import { PureContentEditor } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Col, Input, Radio, Row, Select, Form } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleEditModal } from '../reducer'
import { selectDisplayEditModal, useTypedSelector } from '../selectors'
const { Option } = Select
const EditForm: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayEditModal)
  const onCancel = () => {
    dispatch(toggleEditModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleEditModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal
      visible={isDisplay}
      title="頁面設定"
      onCancel={onCancel}
      width={700}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="名稱">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="狀態" name="is_active" initialValue="on">
              <Radio.Group>
                <Radio value="on">啟用</Radio>
                <Radio value="off">停用</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="content" initialValue="">
          <PureContentEditor />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default EditForm
