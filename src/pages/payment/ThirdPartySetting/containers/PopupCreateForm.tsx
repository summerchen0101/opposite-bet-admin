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
  InputNumber,
  Radio,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
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
    <PopupModal visible={isDisplay} title="新增金流平台" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="金流平台">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="金流類型">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="設定名稱">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="平台顯示">
              <Select placeholder="請選擇" allowClear defaultValue="opt1">
                <Option value="opt1">全部</Option>
                <Option value="opt2">手機</Option>
                <Option value="opt3">桌上型電腦</Option>
              </Select>
            </FormField>
          </Col>
        </Row>

        <h5>金流參數</h5>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="商戶編號">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="商戶密鑰">
              <Input />
            </FormField>
          </Col>
        </Row>

        <h5>單筆限額</h5>
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

        <h5>停用設置</h5>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="充值次數">
              <Input itemType="number" placeholder="0" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="充值金額">
              <Input itemType="number" placeholder="0" />
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
