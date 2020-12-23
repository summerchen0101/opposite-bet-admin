import { PureContentEditor, DateRangePicker, ImageUpload } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import {
  Button,
  Col,
  Collapse,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Tabs,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
const { Option } = Select
const extraButton = (
  <Button size="small" onClick={(e) => e.stopPropagation()}>
    預覽
  </Button>
)
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
    <PopupModal visible={isDisplay} title="新增常見問題" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="分類" name="type" initialValue="opt1">
              <Select placeholder="請選擇" allowClear>
                <Option value="opt1">存款問題</Option>
              </Select>
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" name="is_active" valuePropName="checked">
              <Switch />
            </FormField>
          </Col>
        </Row>
        <FormField label="標題">
          <Input />
        </FormField>
        <PureContentEditor />
      </Form>
    </PopupModal>
  )
}

export default CreateForm
