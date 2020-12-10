import CreateButton from '@/components/CreateButton'
import { LevelCode } from '@/lib/enums'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import { usePopupProvider } from '../context/PopupProvider'

const Component: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const [value, setValue] = usePopupProvider(
    currentLevel === LevelCode.Member ? 'memberCreateForm' : 'createForm',
  )
  return <CreateButton onClick={() => setValue(true)} />
}

export default Component
