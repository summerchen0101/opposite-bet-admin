import PopupModal from '@/components/PopupModal'
import { AdminAccount } from '@/lib/types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAdmin, toggleEditModal } from '../reducer'
import {
  selectDisplayEditModal,
  useTypedSelector,
  selectEditAdmin,
} from '../selectors'
import DataForm from './DataForm'

const EditForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayEditModal)
  const onCancel = () => {
    dispatch(toggleEditModal(false))
  }
  const onFinish = (values: AdminAccount.DataFormProps) => {
    console.log('Success:', values)
    dispatch(createAdmin(values))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const values = useTypedSelector(selectEditAdmin)
  return (
    <PopupModal visible={isDisplay} title="編輯管理者" onCancel={onCancel}>
      <DataForm
        values={values}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </PopupModal>
  )
}

export default EditForm
