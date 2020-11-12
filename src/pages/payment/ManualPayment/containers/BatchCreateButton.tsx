import React from 'react'
import BatchCreateButton from '@/components/BatchCreateButton'
import { useDispatch } from 'react-redux'
import { toggleBatchCreateModal, toggleCreateModal } from '../reducer'

const ManualBatchCreateBtn: React.FC = () => {
  const dispatch = useDispatch()
  const onCreate = () => dispatch(toggleBatchCreateModal(true))
  return <BatchCreateButton onClick={onCreate} />
}

export default ManualBatchCreateBtn
