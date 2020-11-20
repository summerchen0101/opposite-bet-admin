import React from 'react'
import CreateButton from '@/components/CreateButton'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { useAppDispatch } from '@/store'

const Component: React.FC = () => {
  const dispatch = useAppDispatch()
  const onCreate = async () => {
    // const action = await dispatch(fetchC)
    dispatch(toggleCreateModal(true))
  }
  return <CreateButton onClick={onCreate} />
}

export default Component
