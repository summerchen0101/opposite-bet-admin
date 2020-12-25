import CreateButton from '@/components/CreateButton'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const Component: React.FC = () => {
  const [, setVisible] = usePopupProvider('createForm')
  return <CreateButton onClick={() => setVisible(true)} />
}

export default Component
