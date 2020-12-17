import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Radio,
  Row,
  Col,
  Tabs,
  Card,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleEditModal } from '../reducer'
import { selectDisplayEditModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { ContentEditor } from '@/components'
const { Option } = Select
const EditForm: React.FC = () => {
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
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="名稱">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" name="is_active" initialValue="on">
              <Radio.Group>
                <Radio value="on">啟用</Radio>
                <Radio value="off">停用</Radio>
              </Radio.Group>
            </FormField>
          </Col>
        </Row>
        <FormField>
          <ContentEditor />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default EditForm
