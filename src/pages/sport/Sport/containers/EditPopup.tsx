import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm from './DataForm'
import { Form } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'
import { EditSport } from '../API/types'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectEditData)
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as EditSport
      await onEdit({ id: f.id, ...values })
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
      title="編輯體育"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      destroyOnClose
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            name: f.name,
            code: f.code,
            note: f.note,
            is_active: f.is_active,
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
