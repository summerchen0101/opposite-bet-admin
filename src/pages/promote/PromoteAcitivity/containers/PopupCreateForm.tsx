import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Checkbox,
  Row,
  Col,
  Radio,
  Tabs,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { DateRangePicker } from '@/components'
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
    <PopupModal
      visible={isDisplay}
      title="新增活動公告"
      onCancel={onCancel}
      width={700}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="活動名稱" required>
              <Input placeholder="請輸入內容" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="平台顯示" required>
              <Radio.Group defaultValue="opt1">
                <Radio value="opt1">全部</Radio>
                <Radio value="opt2">手機</Radio>
                <Radio value="opt3">桌上型電腦</Radio>
              </Radio.Group>
            </FormField>
          </Col>
        </Row>

        <h5>活動期間</h5>
        <FormField>
          <Checkbox.Group defaultValue={['opt1']}>
            <Checkbox value="opt1">
              <span style={{ marginRight: '5px' }}>無限期</span>
              <DatePicker />
            </Checkbox>
            <Checkbox value="opt2">
              <span style={{ marginRight: '5px' }}>日期區間</span>
              <DateRangePicker />
            </Checkbox>
          </Checkbox.Group>
        </FormField>

        <Tabs defaultActiveKey="cn" type="card" size="small">
          <Tabs.TabPane tab="簡中" key="cn">
            <FormField label="前台活動名稱" required>
              <Input placeholder="請輸入內容" />
            </FormField>
          </Tabs.TabPane>
          <Tabs.TabPane tab="English" key="en">
            <FormField>
              <Input.TextArea />
            </FormField>
          </Tabs.TabPane>
        </Tabs>

        <FormField style={{ marginTop: '30px', textAlign: 'center' }}>
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
