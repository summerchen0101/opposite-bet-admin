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
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { ContentEditor, FormStaticText } from '@/components'
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
  const options = [
    { label: 'aabbb', value: 'aabbb' },
    { label: 'cccc', value: 'cccc' },
  ]
  return (
    <PopupModal
      visible={isDisplay}
      title="新增公告"
      onCancel={onCancel}
      width={700}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="收件人">
              <Radio.Group defaultValue="opt1">
                <Radio value="opt1">會員</Radio>
                <Radio value="opt2">代理</Radio>
              </Radio.Group>
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="帳號">
              <Select
                mode="multiple"
                allowClear
                options={options}
                defaultValue={['aabbb']}
              />
            </FormField>
          </Col>
        </Row>
        <FormField>
          <FormStaticText>發送對象： aabbb</FormStaticText>
        </FormField>
        <Tabs defaultActiveKey="cn" type="card" size="small">
          <Tabs.TabPane tab="簡中" key="cn">
            <FormField>
              <ContentEditor />
            </FormField>
          </Tabs.TabPane>
        </Tabs>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button htmlType="reset">重置</Button>
            <Button type="primary" htmlType="submit">
              送出
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
