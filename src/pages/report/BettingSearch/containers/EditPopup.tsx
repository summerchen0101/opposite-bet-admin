import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Button, Form } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'
import moment from 'moment'

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
        block_type: v.block_type,
        platform_type: v.platform_type,
        ip: v.ip,
        note: v.note,
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
      title="編輯支付工具"
      onCancel={handleCancel}
      destroyOnClose
      width={850}
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            block_type: f.ip_block_type,
            platform_type: f.platform_type,
            ip: f.ip,
            note: f.note,
            is_active: f.is_active,
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
