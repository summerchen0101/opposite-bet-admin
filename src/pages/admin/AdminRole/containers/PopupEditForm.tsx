import PopupModal from '@/components/PopupModal'
import { useAppDispatch } from '@/store'
import { cloneDeep } from 'lodash'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doEdit, fetchList, toggleEditModal } from '../reducer'
import {
  selectDisplayEditModal,
  selectEditRole,
  useTypedSelector,
  selectMenu,
} from '../selectors'
import DataForm from './DataForm'

const EditForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isDisplay = useTypedSelector(selectDisplayEditModal)
  const menu = useTypedSelector(selectMenu)
  const onCancel = () => {
    dispatch(toggleEditModal(false))
  }
  const onFinish = async ({ name }) => {
    const action = await dispatch(doEdit(name))
    if (doEdit.fulfilled.match(action)) {
      dispatch(toggleEditModal(false))
      dispatch(fetchList())
    }
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
        menu={menu}
      />
    </PopupModal>
  )
}

export default EditForm
