import { PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Protocal } from '@/lib/enums'
import { Button, Form as AntForm, Input, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleInvitedFormModal } from '../reducer'
import { selectDisplayInvitedFormModal, useTypedSelector } from '../selectors'
const PopupInvitedForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayInvitedFormModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleInvitedFormModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleInvitedFormModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const protocalOpts = Object.entries(Protocal).map(([label, value]) => ({
    label: value,
    value,
  }))

  return (
    <PopupModal visible={isDisplay} title="邀请连结" onCancel={onCancel}>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="連結網址" name="link">
          <Input.Search
            addonBefore={<Select options={protocalOpts} defaultValue="http" />}
            allowClear
            enterButton="複製"
          />
        </FormField>
        <FormField label="推廣碼" name="code">
          <Input.Search allowClear enterButton="複製" />
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

export default PopupInvitedForm
