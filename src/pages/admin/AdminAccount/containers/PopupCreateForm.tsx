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
  InputNumber,
} from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectRoleOptions } from '../selectors'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { BasicSelector, Text } from '@/components'
import { AdminAccount } from '@/lib/types'
// const [form] = AntForm.useForm()
const { Option } = Select
const initValues: AdminAccount.CreateFormProps = {
  account: '',
  realName: '',
  email: '',
  role: '',
  singleLimit: 1000,
  dailyLimit: 10000,
  effectiveTime: 'limit',
  limitDate: '',
  ip: '',
  status: 'on',
  notes: '',
}
const CreateForm: React.FC = () => {
  const [form] = AntForm.useForm()
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    // dispatch()
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const onReset = () => {
    form.resetFields()
  }
  const roleOptions = useTypedSelector(selectRoleOptions)
  return (
    <PopupModal visible={isDisplay} title="新增管理者" onCancel={onCancel}>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={initValues}
        form={form}
      >
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="管理者帳號" name="account" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="真實姓名" name="realName" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="電子郵箱" name="email" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="角色" name="role" required>
              <BasicSelector
                options={roleOptions}
                placeholder="請選擇"
                width="100%"
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="單筆提款審核上限" name="singleLimit" required>
              <InputNumber
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="每日提款審核上限" name="dailyLimit" required>
              <InputNumber
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              />
            </FormField>
          </Col>
        </Row>

        <FormField
          label="帳號有效時間"
          required
          name="effectiveTime"
          extra={<Text color="danger">(时间到会自动停用)</Text>}
        >
          <Radio.Group>
            <Radio value="limit">
              <Space>
                <span>時間：</span>
                <FormField name="limitDate">
                  <DatePicker />
                </FormField>
              </Space>
            </Radio>
            <Radio value="forever">永久</Radio>
          </Radio.Group>
        </FormField>

        <Row gutter={16}>
          <Col span={12}>
            <FormField
              label="允許登入IP"
              name="ip"
              extra={<Text color="danger">(多IP請逗號分隔，空白=不限制)</Text>}
            >
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" name="status">
              <Radio.Group>
                <Radio value="on">開啟</Radio>
                <Radio value="off">關閉</Radio>
              </Radio.Group>
            </FormField>
          </Col>
        </Row>

        <FormField label="備註" name="notes">
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
