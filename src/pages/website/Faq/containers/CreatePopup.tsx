import PopupModal from '@/components/PopupModal'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { selectEditData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const [form] = Form.useForm()
  const { onCreate } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onCreate({
        catalogue_id: v.catalogue_id,
        title: v.title,
        content: v.content,
        content_mobile: v.content_mobile,
        is_active: v.is_active,
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
      title="新增常見問題"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      width={700}
    >
      <DataForm
        form={form}
        values={{
          catalogue_id: null,
          title: '',
          content: '',
          content_mobile: '',
          is_active: true,
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
