import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Row,
  Col,
  Tabs,
  Radio,
  Upload,
  message,
  Card,
} from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { DateRangePicker, ImageCard, ImageUpload } from '@/components'
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
      title="新增廣告"
      onCancel={onCancel}
      width={700}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Tabs defaultActiveKey="cn" type="card" size="small">
          <Tabs.TabPane tab="簡中" key="cn">
            <Row gutter={16}>
              <Col span={12}>
                <FormField label="標題" required>
                  <Input />
                </FormField>
                <FormField label="裝置" required>
                  <Radio.Group defaultValue="op3">
                    <Radio value="op1">h3</Radio>
                    <Radio value="op2">手機版</Radio>
                    <Radio value="op3">兩者皆上傳</Radio>
                  </Radio.Group>
                </FormField>
                <FormField label="公告期間" required>
                  <DateRangePicker />
                </FormField>
                <FormField label="上傳圖片" required>
                  <ImageUpload />
                </FormField>
              </Col>
              <Col span={12}>
                <ImageCard>
                  <img src="https://fakeimg.pl/680x680/?text=Image" />
                </ImageCard>
              </Col>
            </Row>
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
