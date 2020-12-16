import PopupModal from '@/components/PopupModal'
import { Form, Input } from 'antd'
import React from 'react'
import { Status } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'
import { useTypedSelector, selectEditData } from '../selectors'
import useValidator from '@/utils/hooks/useValidator'

const PwPopup: React.FC = () => {
  const VD = useValidator()
  const [visible, setVisible] = usePopupProvider('pwForm')
  const { changePassword } = useAPIService()
  const f = useTypedSelector(selectEditData)
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await changePassword(f.id, v.pass)
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  const handleCancel = () => {
    form.resetFields()
    setVisible(false)
  }
  return (
    <PopupModal
      visible={visible}
      title="密碼修改"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <Form form={form} layout="vertical" validateTrigger="onBlur">
        <Form.Item
          label="密碼"
          name="pass"
          rules={[{ required: true }, VD.userPassword]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="確認密碼"
          name="pass_c"
          rules={[{ required: true }, VD.sameAs('pass')]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default PwPopup
