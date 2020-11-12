import React from 'react'
import CreateButton from '@/components/CreateButton'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { useHistory } from 'react-router-dom'

const Component: React.FC = () => {
  const history = useHistory()
  const onClicked = () => history.push('/')
  return <CreateButton onClick={onClicked} />
}

export default Component
