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
    <PopupModal
      visible={isDisplay}
      title="新增充值資訊"
      onCancel={onCancel}
      width="700px"
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={24}>
          <Col span={12}>
            <FormField label="名稱">
              <Input />
            </FormField>
            <FormField label="銀行名稱">
              <Select placeholder="請選擇" allowClear defaultValue="opt1">
                <Option value="opt1">822 中國信託</Option>
              </Select>
            </FormField>
            <FormField label="控端提示">
              <Select placeholder="請選擇" allowClear defaultValue="opt1">
                <Option value="opt1">存入</Option>
                <Option value="opt2">提出</Option>
              </Select>
            </FormField>
            <div style={{ marginTop: 30 }}></div>
            <h3>入款限額設置</h3>
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
          </Col>
          <Col span={12}>
            <h3>會員端顯示</h3>
            <FormField label="收款人">
              <div>王大明</div>
            </FormField>
            <FormField label="開戶行網點">
              <div>123232</div>
            </FormField>
            <FormField label="帳號">
              <div>141241241241234123</div>
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
