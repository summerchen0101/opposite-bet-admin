import PopupModal from '@/components/PopupModal'
import React, { useEffect } from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm from './DataForm'
import { Form } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'
import { Status } from '../API/types'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectEditData)
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = await form.validateFields()
      await onEdit({
        id: f.id,
        acc: v.acc,
        pass: v.pass,
        name: v.name,
        role_ids: v.role_ids,
        permission_ids: v.permission_ids,
        is_active: v.is_active,
        status: v.is_lock ? Status.Blocked : Status.Normal,
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
      title="編輯管理者角色"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            name: f.name,
            acc: f.acc,
            pass: '',
            pass_c: '',
            is_active: f.is_active,
            is_lock: f.status === Status.Blocked,
            permission_ids: f.permissions.map((t) => t.id),
            role_ids: f.roles.map((t) => t.id),
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
