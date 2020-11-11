import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Radio,
  Tabs,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleUpdateModal } from '../reducer'
import { selectDisplayUpdateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
const { Option } = Select
const { TabPane } = Tabs
const UpdateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayUpdateModal)
  const onCancel = () => {
    dispatch(toggleUpdateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleUpdateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal visible={isDisplay} title="編輯" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="標題" name="mainTeam" required>
          <Input />
        </FormField>
        <FormField label="顯示狀態" name="league" required>
          <Radio.Group defaultValue="on">
            <Radio value="on">啟用</Radio>
            <Radio value="off">停用</Radio>
          </Radio.Group>
        </FormField>
        <Tabs defaultActiveKey="cn" type="card" size="small">
          <TabPane tab="簡中" key="cn">
            <FormField wrapperCol={{ offset: 0, span: 0 }}>
              <Input.TextArea />
            </FormField>
          </TabPane>
          <TabPane tab="English" key="en">
            <FormField wrapperCol={{ offset: 0, span: 0 }}>
              <Input.TextArea />
            </FormField>
          </TabPane>
        </Tabs>

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

export default UpdateForm
