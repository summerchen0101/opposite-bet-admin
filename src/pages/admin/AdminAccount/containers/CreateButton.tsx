import React from 'react'
import CreateButton from '@/components/CreateButton'
import { useDispatch } from 'react-redux'
import { fetchAdminCreateOptions, toggleCreateModal } from '../reducer'

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const onCreate = () => {
    dispatch(fetchAdminCreateOptions())
    dispatch(toggleCreateModal(true))
  }
  return <CreateButton onClick={onCreate} />
}

export default Component
