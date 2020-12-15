import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm from './DataForm'
import { Form } from 'antd'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()

  return (
    <PopupModal
      visible={visible}
      title="編輯管理者角色"
      onCancel={() => setVisible(false)}
    >
      <DataForm form={form} />2
    </PopupModal>
  )
}

export default EditPopup
