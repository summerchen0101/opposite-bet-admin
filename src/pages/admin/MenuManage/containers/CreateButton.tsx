import CreateButton from '@/components/CreateButton'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const Component: React.FC = () => {
  const { getOptions } = useAPIService()
  const [visible, setVisible] = usePopupProvider('createForm')
  const handleCreate = async () => {
    await getOptions()
    setVisible(true)
  }
  return <CreateButton onClick={() => handleCreate()} />
}

export default Component
