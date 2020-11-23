import { CascaderSelector, PopupModal } from '@/components'
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
import {
  selectDisplayCreateModal,
  useTypedSelector,
  selectRoleOptions,
  selectAgentStruct,
} from '../selectors'
import Form, { FormField } from '@/components/Form'
const { Option } = Select
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const roleOptions = useTypedSelector(selectRoleOptions)

  const agentStruct = useTypedSelector(selectAgentStruct)

  const values = {
    role: 1,
  }
  return (
    <PopupModal
      visible={isDisplay}
      title="新增組織"
      onCancel={onCancel}
      width={600}
    >
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={values}
      >
        <FormField label="組織層級" required>
          <CascaderSelector
            options={agentStruct}
            placeholder="請選擇組織層級"
          />
        </FormField>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="會員帳號" required>
              <Input.Search allowClear enterButton="隨機選號" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="名稱" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="密碼" required>
              <Input.Password />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="確認密碼" required>
              <Input.Password />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="帳號角色" required name="role">
              <Select
                options={roleOptions}
                placeholder="請選擇"
                allowClear
              ></Select>
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" required>
              <Select placeholder="請選擇" allowClear defaultValue="opt1">
                <Option value="opt1">啟用</Option>
                <Option value="opt2">停用</Option>
                <Option value="opt3">凍結</Option>
              </Select>
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
