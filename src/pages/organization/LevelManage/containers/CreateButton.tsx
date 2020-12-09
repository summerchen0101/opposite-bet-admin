import CreateButton from '@/components/CreateButton'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const Component: React.FC = () => {
  const [value, setValue] = usePopupProvider('createForm')
  return <CreateButton onClick={() => setValue(true)} />
}

export default Component
