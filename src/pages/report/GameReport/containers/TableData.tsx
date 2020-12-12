import { LevelCode } from '@/lib/enums'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import LevelBreadcrumb from './LevelBreadcrumb'
import LevelTableData from './LevelTableData'
import MemberTableData from './MemberTableData'

const TableData: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  return (
    <>
      <LevelBreadcrumb />
      {currentLevel !== LevelCode.Member ? (
        <LevelTableData />
      ) : (
        <MemberTableData />
      )}
    </>
  )
}

export default TableData
