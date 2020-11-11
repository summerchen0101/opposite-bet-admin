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

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]
  return (
    <PopupModal
      visible={isDisplay}
      title="新增會員"
      onCancel={onCancel}
      width={600}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="組織層級" required>
          <CascaderSelector
            options={options}
            placeholder="加盟商 / 股東 / 總代"
          />
        </FormField>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="會員帳號" required>
              <Input.Search allowClear enterButton="隨機選號" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="真實姓名" required>
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
            <FormField label="手機號碼" required>
              <Input addonBefore="+886" />
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
          <Col span={12}>
            <FormField label="電子信箱" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="微信" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="生日" required>
              <DatePicker style={{ width: '100%' }} />
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
