import React from 'react'
import CreateButton from '@/components/CreateButton'
import { useDispatch } from 'react-redux'
import { toggleCreateModal, fetchCreateOptions } from '../reducer'

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const onCreate = () => {
    dispatch(fetchCreateOptions())
  }
  return <CreateButton onClick={onCreate} />
}

export default Component
