import React from 'react'
import CreateButton from '@/components/CreateButton'
import { useDispatch } from 'react-redux'
import { toggleCreateModal, fetchCreateOptions } from '../reducer'
import { useAppDispatch } from '@/store'

const Component: React.FC = () => {
  const dispatch = useAppDispatch()
  const onCreate = async () => {
    const action = await dispatch(fetchCreateOptions())
    if (fetchCreateOptions.fulfilled.match(action)) {
      dispatch(toggleCreateModal(true))
    }
  }
  return <CreateButton onClick={onCreate} />
}

export default Component
