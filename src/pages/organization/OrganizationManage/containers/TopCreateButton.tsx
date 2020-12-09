import CreateButton from '@/components/CreateButton'
import { useAppDispatch } from '@/store'
import { message } from 'antd'
import React from 'react'
import { fetchCreateOptions, toggleCreateModal } from '../reducer'

const Component: React.FC = () => {
  const dispatch = useAppDispatch()
  const onCreate = async () => {
    const action = await dispatch(fetchCreateOptions())
    if (fetchCreateOptions.fulfilled.match(action)) {
      dispatch(toggleCreateModal(true))
    } else {
      message.error(action.error.message)
    }
  }
  return <CreateButton onClick={onCreate} />
}

export default Component
