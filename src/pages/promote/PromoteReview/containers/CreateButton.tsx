import CreateButton from '@/components/CreateButton'
import { CreatePromoteAcitivity } from '@/lib/routes'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Component: React.FC = () => {
  const history = useHistory()
  const onClicked = () => history.push(CreatePromoteAcitivity)
  return <CreateButton onClick={onClicked} />
}

export default Component
