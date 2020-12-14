import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import * as AdminAccount from '../types'
import DataForm from './DataForm'

const initValues: AdminAccount.DataFormProps = {
  account: '',
  realName: '',
  pw: '',
  pw_confirm: '',
  email: '',
  role: null,
  singleLimit: 1000,
  dailyLimit: 10000,
  effectiveTime: 'limit',
  limitDate: null,
  ip: '',
  status: 1,
  notes: '',
}

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')

  const onCancel = () => setVisible(false)
  const onFinish = async (values: AdminAccount.DataFormProps) => {
    console.log('Success:', values)
    setVisible(false)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    setVisible(false)
  }
  return (
    <PopupModal visible={visible} title="編輯管理者" onCancel={onCancel}>
      <DataForm
        values={initValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </PopupModal>
  )
}

export default EditPopup
