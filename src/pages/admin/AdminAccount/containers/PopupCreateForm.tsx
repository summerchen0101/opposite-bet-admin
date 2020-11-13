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
  Radio,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { Text } from '@/components'
// const [form] = AntForm.useForm()
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
  const onReset = () => {
    // form.resetFields()
  }
  return (
    <PopupModal visible={isDisplay} title="新增管理者" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="管理者帳號" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="真實姓名" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="電子郵箱" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="角色" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="單筆提款審核上限" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="每日提款審核上限" required>
              <Input />
            </FormField>
          </Col>
        </Row>

        <FormField
          label="帳號有效時間"
          required
          extra={<Text color="danger">(时间到会自动停用)</Text>}
        >
          <Radio.Group defaultValue="opt1">
            <Radio value="opt1">
              <Space>
                <span>時間：</span>
                <DatePicker />
              </Space>
            </Radio>
            <Radio value="opt2">永久</Radio>
          </Radio.Group>
        </FormField>

        <Row gutter={16}>
          <Col span={12}>
            <FormField
              label="允許登入IP"
              extra={<Text color="danger">(多IP請逗號分隔，空白=不限制)</Text>}
            >
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態">
              <Radio.Group defaultValue="opt1">
                <Radio value="opt1">開啟</Radio>
                <Radio value="opt2">關閉</Radio>
              </Radio.Group>
            </FormField>
          </Col>
        </Row>

        <FormField label="備註">
          <Input.TextArea />
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button htmlType="reset" onClick={onReset}>
              重置
            </Button>
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
