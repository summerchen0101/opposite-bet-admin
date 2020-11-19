import PopupModal from '@/components/PopupModal'
import { AdminAccount } from '@/lib/types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editAdmin, toggleEditModal } from '../reducer'
import moment from 'moment'
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
    dispatch(editAdmin(values))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const _v = useTypedSelector(selectEditAdmin)
  const values = {
    ..._v,
    limitDate: _v.limitDate ? moment(_v.limitDate) : null,
  }
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
