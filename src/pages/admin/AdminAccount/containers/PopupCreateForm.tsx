import PopupModal from '@/components/PopupModal'
import { AdminAccount } from '@/lib/types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAdmin, toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import DataForm from './DataForm'

const initValues: AdminAccount.DataFormProps = {
  account: '',
  realName: '',
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

const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values: AdminAccount.DataFormProps) => {
    console.log('Success:', values)
    dispatch(createAdmin(values))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal visible={isDisplay} title="新增管理者" onCancel={onCancel}>
      <DataForm
        values={initValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </PopupModal>
  )
}

export default CreateForm
