import { FormStaticText } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Col, Input, Row, Select, Space, Table } from 'antd'
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
  return (
    <PopupModal visible={isDisplay} title="新增提現資訊" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="名稱">
          <Input />
        </FormField>
        <div style={{ marginTop: 30 }}></div>
        <h5>出款限額設置</h5>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="上限">
              <Input itemType="number" placeholder="5000" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="下限">
              <Input itemType="number" placeholder="0" />
            </FormField>
          </Col>
        </Row>
        <div style={{ marginTop: 30 }}></div>
        <h5>手續費設置</h5>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="優惠次數">
              <Input itemType="number" placeholder="0" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="手續費">
              <Input itemType="number" placeholder="0" />
            </FormField>
          </Col>
        </Row>
        <div style={{ marginTop: 30 }}></div>
        <h5>每日累計出款上限</h5>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="金額">
              <Input itemType="number" placeholder="5000" />
            </FormField>
          </Col>
        </Row>
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

export default CreateForm
