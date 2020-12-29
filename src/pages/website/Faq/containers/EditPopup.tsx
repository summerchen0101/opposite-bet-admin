import PopupModal from '@/components/PopupModal'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { selectEditData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectEditData)
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onEdit({
        id: f.id,
        catalogue_id: v.catalogue_id,
        title: v.title,
        content: v.content,
        content_mobile: f.content_mobile,
        is_active: f.is_active,
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
      title="編輯常見問題"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      width={700}
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            catalogue_id: f.catalogue.id,
            title: f.title,
            content: f.content,
            content_mobile: f.content_mobile,
            is_active: true,
          }}
        />
      )}
    </PopupModal>
  )
}

export default CreatePopup
