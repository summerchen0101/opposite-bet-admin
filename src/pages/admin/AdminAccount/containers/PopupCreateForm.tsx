import PopupModal from '@/components/PopupModal'
import * as AdminAccount from '../types'
import { useAppDispatch } from '@/store'
import { message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAdmin, fetchAdminList, toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
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

const CreateForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = async (values: AdminAccount.DataFormProps) => {
    console.log('Success:', values)
    const action = await dispatch(createAdmin(values))
    if (createAdmin.fulfilled.match(action)) {
      dispatch(fetchAdminList())
    } else {
      message.error(action.error.message)
    }
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
