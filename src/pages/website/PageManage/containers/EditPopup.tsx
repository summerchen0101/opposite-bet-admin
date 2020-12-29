import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Form } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectEditData)
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onEdit({
        id: f.id,
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
      title="編輯頁面"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      destroyOnClose
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            title: f.title,
            code: f.code,
            is_active: f.is_active,
            content: f.content,
            content_mobile: f.content_mobile,
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
