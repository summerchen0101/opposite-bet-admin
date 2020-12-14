import CreateButton from '@/components/CreateButton'
import { usePopupProvider } from '../context/PopupProvider'
import React from 'react'

const Component: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  return <CreateButton onClick={() => setVisible(true)} />
}

export default Component
