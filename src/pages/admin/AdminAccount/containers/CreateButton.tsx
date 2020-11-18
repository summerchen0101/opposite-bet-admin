import CreateButton from '@/components/CreateButton'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'

const Component: React.FC = () => {
  const dispatch = useDispatch()
  const onCreate = () => dispatch(toggleCreateModal(true))
  return <CreateButton onClick={onCreate} />
}

export default Component
