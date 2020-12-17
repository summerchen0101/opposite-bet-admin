import { ContentEditor, DateRangePicker, ImageUpload } from '@/components'
import Dashboard from '@/components/Dashboard'
import Form, { FormField } from '@/components/Form'
import {
  Button,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Input,
  Radio,
  Row,
  Space,
  Switch,
  Tabs,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from './components/PageHeader'

const Manager: React.FC = () => {
  const dispatch = useDispatch()
  const onCancel = () => {}
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const options = [
    { label: '公告', value: 'opt1' },
    { label: '輪播', value: 'opt2' },
    { label: '跑馬燈', value: 'opt3' },
  ]
  return (
    <Dashboard>
      <PageHeader />
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="活動名稱">
              <Input placeholder="請輸入內容" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="顯示">
              <Checkbox.Group options={options} defaultValue={['opt1']} />
            </FormField>
          </Col>
        </Row>

        <FormField label="活動期間">
          <Radio.Group defaultValue="opt1">
            <Radio value="opt1">
              <span style={{ marginRight: '5px' }}>無限期</span>
            </Radio>
            <Radio value="opt2">
              <span style={{ marginRight: '5px' }}>日期區間</span>
              <DateRangePicker />
            </Radio>
          </Radio.Group>
        </FormField>

        <Tabs defaultActiveKey="cn" type="card" size="small">
          <Tabs.TabPane tab="簡中" key="cn">
            <FormField label="前台活動名稱">
              <Input placeholder="請輸入內容" />
            </FormField>
            <FormField>
              <Collapse defaultActiveKey={['1']}>
                <Collapse.Panel header="桌上型電腦" key="1">
                  <Space>
                    <ImageUpload />
                    <ContentEditor />
                  </Space>
                </Collapse.Panel>
                <Collapse.Panel header="手機" key="2">
                  <Space>
                    <ImageUpload />
                    <ContentEditor />
                  </Space>
                </Collapse.Panel>
              </Collapse>
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
    </Dashboard>
  )
}

export default Manager
