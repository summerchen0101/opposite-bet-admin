import PopupModal from '@/components/PopupModal'
import React from 'react'
import { useDispatch } from 'react-redux'
import { doCreate, toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import DataForm from './DataForm'

const formValues = {
  name: '',
}

const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = ({ name }) => {
    dispatch(doCreate(name))
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <PopupModal visible={isDisplay} title="新增管理者角色" onCancel={onCancel}>
      <DataForm
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        values={formValues}
      />
    </PopupModal>
  )
}

export default CreateForm
