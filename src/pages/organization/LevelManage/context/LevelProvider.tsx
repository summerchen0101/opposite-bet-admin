import { LevelCode } from '@/lib/enums'
import React, { createContext, useContext, useEffect, useState } from 'react'
import qs from 'qs'
import { useLocation } from 'react-router-dom'
import { getLevelCode } from '@/utils/transfer'

// type TState = [Level, React.Dispatch<React.SetStateAction<Level>>]
interface IState {
  parentLevel: LevelCode
  currentLevel: LevelCode
  setCurrentLevel: React.Dispatch<React.SetStateAction<LevelCode>>
}
const LevelContext = createContext<IState | null>(null)

const LevelProvider: React.FC = ({ children }) => {
  const location = useLocation()
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }) as { parent: LevelCode }
  const [currentLevel, setCurrentLevel] = useState(LevelCode.Vendor)
  useEffect(() => {
    setCurrentLevel(getLevelCode(query.parent, 1))
  }, [location])
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

export const useLevelProvider = () => useContext(LevelContext)
