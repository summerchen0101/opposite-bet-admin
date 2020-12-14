import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm from './DataForm'

const formValues = {
  name: '',
}

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const onFinish = async ({ name }) => {
    setVisible(false)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    setVisible(false)
  }

  return (
    <PopupModal
      visible={visible}
      title="編輯管理者角色"
      onCancel={() => setVisible(false)}
    >
      <DataForm
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        values={formValues}
      />
    </PopupModal>
  )
}

export default EditPopup
