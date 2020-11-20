import PopupModal from '@/components/PopupModal'
import { useAppDispatch } from '@/store'
import { message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { doCreate, toggleCreateModal } from '../reducer'
import {
  selectDisplayCreateModal,
  useTypedSelector,
  selectMenu,
} from '../selectors'
import DataForm from './DataForm'

const formValues = {
  name: '',
}

const CreateForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const menu = useTypedSelector(selectMenu)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = async ({ name }) => {
    const action = await dispatch(doCreate(name))
    if (doCreate.fulfilled.match(action)) {
      dispatch(toggleCreateModal(false))
    } else {
      message.error(action.error.message)
    }
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
        menu={menu}
      />
    </PopupModal>
  )
}

export default CreateForm
