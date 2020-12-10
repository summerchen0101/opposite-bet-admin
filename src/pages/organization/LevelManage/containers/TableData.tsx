import { LevelCode } from '@/lib/enums'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import LevelTableData from './LevelTableData'
import MemberTableData from './MemberTableData'

const TableData: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  if (currentLevel !== LevelCode.Member) {
    return <LevelTableData />
  }
  return <MemberTableData />
}

export default TableData
