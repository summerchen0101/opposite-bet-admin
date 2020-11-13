import { ContentEditor, DateRangePicker, ImageUpload } from '@/components'
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
            <FormField label="分類" name="type" required initialValue="opt1">
              <Select placeholder="請選擇" allowClear>
                <Option value="opt1">儲存相關</Option>
              </Select>
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="廣告期間" required>
              <DateRangePicker />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField
              label="顯示狀態"
              name="status"
              required
              initialValue="on"
            >
              <Radio.Group>
                <Radio value="on">啟用</Radio>
                <Radio value="off">停用</Radio>
              </Radio.Group>
            </FormField>
          </Col>
          <Col span={12}>
            <FormField
              label="另開視窗"
              name="openWin"
              required
              initialValue="yes"
            >
              <Radio.Group>
                <Radio value="yes">是</Radio>
                <Radio value="on">否</Radio>
              </Radio.Group>
            </FormField>
          </Col>
        </Row>

        <Tabs defaultActiveKey="cn" type="card" size="small">
          <Tabs.TabPane tab="簡中" key="cn">
            <FormField label="標題" required>
              <Input />
            </FormField>
            <FormField>
              <ContentEditor />
            </FormField>
          </Tabs.TabPane>
        </Tabs>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button>預覽</Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
