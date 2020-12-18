import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { MenuFormData } from './DataForm'
import { Form } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'
import { Status } from '@/lib/enums'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectEditData)
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as MenuFormData
      await onEdit({
        id: f.id,
        ...values,
        is_active: values.is_active === Status.ON,
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
      title="編輯選單"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      destroyOnClose
    >
      {f && (
        <DataForm
          form={form}
          values={{
            name: f.name,
            path: f.path,
            icon: f.icon,
            is_active: f.is_active ? Status.ON : Status.OFF,
            role_ids: f.roles.map((t) => t.id),
            permission_ids: f.permissions.map((t) => t.id),
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
