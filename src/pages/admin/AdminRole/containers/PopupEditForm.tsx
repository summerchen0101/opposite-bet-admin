import PopupModal from '@/components/PopupModal'
import { cloneDeep } from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doEdit, toggleEditModal } from '../reducer'
import {
  selectDisplayEditModal,
  selectEditRole,
  useTypedSelector,
} from '../selectors'
import DataForm from './DataForm'

const EditForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayEditModal)
  const onCancel = () => {
    dispatch(toggleEditModal(false))
  }
  const onFinish = ({ name }) => {
    dispatch(doEdit(name))
    dispatch(toggleEditModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const editRole = useSelector(selectEditRole)
  const cloneEditRole = cloneDeep(editRole)

  return (
    <PopupModal visible={isDisplay} title="編輯管理者角色" onCancel={onCancel}>
      <DataForm
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        values={editRole}
      />
    </PopupModal>
  )
}

export default EditForm
