import { PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Protocal } from '@/lib/enums'
import {
  Button,
  Col,
  Form as AntForm,
  Input,
  Radio,
  Row,
  Select,
  Space,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMemberCreateModal } from '../reducer'
import { selectDisplayMemberCreateModal, useTypedSelector } from '../selectors'
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayMemberCreateModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleMemberCreateModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleMemberCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const protocalOpts = Object.entries(Protocal).map(([label, value]) => ({
    label: value,
    value,
  }))
  const selectBefore = <Select options={protocalOpts} defaultValue="http://" />
  const formValues = {
    account: '',
    name: '',
    status: 1,
    host: '',
  }
  const statusOpts = [
    { label: '啟用', value: 1 },
    { label: '停用', value: 0 },
  ]
  const accTypeOpts = [
    { label: '一般', value: 'normal' },
    { label: '測試', value: 'testing' },
  ]
  return (
    <PopupModal
      visible={isDisplay}
      title="新增會員"
      onCancel={onCancel}
      width={600}
    >
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={formValues}
      >
        <Row gutter={16}>
          <Col span={12}>
            <FormField
              label="帳號"
              name="account"
              help="請輸入3個英文字母作為帳號"
            >
              <Input.Search
                allowClear
                addonBefore={
                  <Select options={accTypeOpts} defaultValue="normal" />
                }
                enterButton="隨機選號"
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="名稱" name="name">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="密碼">
              <Input.Password />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="確認密碼">
              <Input.Password />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="官網Host" name="host">
              <Input addonBefore={selectBefore} />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" name="status">
              <Radio.Group options={statusOpts} />
            </FormField>
          </Col>
        </Row>

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
