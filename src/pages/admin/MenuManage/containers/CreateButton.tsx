import CreateButton from '@/components/CreateButton'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const Component: React.FC = () => {
  const [, setVisible] = usePopupProvider('createForm')
  const handleCreate = async () => {
    setVisible(true)
  }
  return <CreateButton onClick={() => handleCreate()} />
}

export default Component
