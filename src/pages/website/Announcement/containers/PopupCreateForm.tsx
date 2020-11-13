import { BasicSelector, DateRangePicker } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Col, Input, Row, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
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
    { label: '全部', value: 'all' },
    { label: '跑馬燈', value: 'opt1' },
    { label: '系統通知', value: 'opt2' },
    { label: '賽事公告', value: 'opt3' },
    { label: '活動優惠', value: 'opt4' },
  ]
  return (
    <PopupModal visible={isDisplay} title="新增公告" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="標題">
          <Input />
        </FormField>
        <Row gutter={16}>
          <Col span={14}>
            <FormField label="期間">
              <DateRangePicker />
            </FormField>
          </Col>
          <Col span={10}>
            <FormField label="公告種類">
              <BasicSelector options={options} value="all" />
            </FormField>
          </Col>
        </Row>
        <FormField label="簡中內容(3000字以下)">
          <Input.TextArea />
        </FormField>

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
