import { LevelCode } from '@/lib/enums'
import React, { createContext, useContext, useEffect, useState } from 'react'
import qs, { ParsedQs } from 'qs'
import { useLocation } from 'react-router-dom'
import { getLevelCode } from '@/utils/transfer'

// type TState = [Level, React.Dispatch<React.SetStateAction<Level>>]
interface IState {
  parentLevel: LevelCode
  currentLevel: LevelCode
  setCurrentLevel: React.Dispatch<React.SetStateAction<LevelCode>>
  alias: string
}
const LevelContext = createContext<IState | null>(null)
interface QueryResponse extends ParsedQs {
  parent: LevelCode
  alias: string
}
const LevelProvider: React.FC = ({ children }) => {
  const location = useLocation()
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }) as QueryResponse
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
        alias: query.alias,
      }}
    >
      {children}
    </LevelContext.Provider>
  )
}

export default LevelProvider

export const useLevelProvider = () => useContext(LevelContext)
