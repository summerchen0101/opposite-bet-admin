import { LevelCode } from '@/lib/enums'
import { getLevelCode } from '@/utils/transfer'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

// type TState = [Level, React.Dispatch<React.SetStateAction<Level>>]
interface IState {
  parentLevel: LevelCode
  currentLevel: LevelCode
  setCurrentLevel: React.Dispatch<React.SetStateAction<LevelCode>>
}
const LevelContext = createContext<IState | null>(null)

const LevelProvider: React.FC = ({ children }) => {
  const [currentLevel, setCurrentLevel] = useState(LevelCode.Vendor)
  return (
    <LevelContext.Provider
      value={{
        parentLevel: getLevelCode(currentLevel, -1),
        currentLevel,
        setCurrentLevel,
      }}
    >
      {children}
    </LevelContext.Provider>
  )
}

export default LevelProvider

export const useLevelProvider = () => {
  const { setCurrentLevel, ...rest } = useContext(LevelContext)
  const params = useParams<{ level: LevelCode }>()
  useEffect(() => {
    setCurrentLevel(params.level || LevelCode.Vendor)
  }, [params.level])
  return { ...rest }
}
