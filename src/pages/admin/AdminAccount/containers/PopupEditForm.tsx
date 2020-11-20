import PopupModal from '@/components/PopupModal'
import { AdminAccount } from '@/lib/types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editAdmin, fetchAdminList, toggleEditModal } from '../reducer'
import moment from 'moment'
import {
  selectDisplayEditModal,
  useTypedSelector,
  selectEditAdmin,
} from '../selectors'
import DataForm from './DataForm'
import { message } from 'antd'
import { useAppDispatch } from '@/store'

const EditForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isDisplay = useTypedSelector(selectDisplayEditModal)
  const onCancel = () => {
    dispatch(toggleEditModal(false))
  }
  const onFinish = async (values: AdminAccount.DataFormProps) => {
    console.log('Success:', values)
    const action = await dispatch(editAdmin(values))
    if (editAdmin.fulfilled.match(action)) {
      dispatch(fetchAdminList())
    } else {
      message.error(action.error.message)
    }
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
