import PopupModal from '@/components/PopupModal'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onCreate({
        title: v.title,
        code: v.code,
        is_active: v.is_active,
        content: v.content,
        content_mobile: v.content_mobile,
      })
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
      title="新增頁面"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          title: '',
          code: '',
          is_active: true,
          content: '',
          content_mobile: '',
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
