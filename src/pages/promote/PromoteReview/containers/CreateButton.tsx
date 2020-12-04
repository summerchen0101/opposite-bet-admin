import CreateButton from '@/components/CreateButton'
import { CreatePromoteAcitivity } from '@/pages/promote/routes'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Component: React.FC = () => {
  const history = useHistory()
  const onClicked = () => history.push(CreatePromoteAcitivity.path)
  return <CreateButton onClick={onClicked} />
}

export default Component
