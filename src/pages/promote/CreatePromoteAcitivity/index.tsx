import { ContentEditor, DateRangePicker, ImageUpload } from '@/components'
import Dashboard from '@/components/Dashboard'
import Form, { FormField } from '@/components/Form'
import { statusOpts } from '@/lib/options'
import {
  Button,
  Col,
  Collapse,
  Input,
  InputNumber,
  Radio,
  Row,
  Space,
} from 'antd'
import React from 'react'
import PageHeader from './components/PageHeader'

const Manager: React.FC = () => {
  const onCancel = () => {}
  return (
    <Dashboard>
      <PageHeader />
      <Form>
        <Row gutter={32}>
          <Col span={12}>
            <FormField label="活動名稱">
              <Input placeholder="請輸入內容" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" name="status" initialValue={1}>
              <Radio.Group options={statusOpts.filter((t) => t.value !== 0)} />
            </FormField>
          </Col>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
            <FormField label="活動獎金">
              <InputNumber style={{ width: '200px' }} placeholder="0" />
            </FormField>
          </Col>
        </Row>

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
      </Form>
    </Dashboard>
  )
}

export default Manager
