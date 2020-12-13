import { LevelCode } from '@/lib/enums'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import LevelBreadcrumb from './LevelBreadcrumb'
import LevelTableData from './LevelTableData'
import MemberTableData from './MemberTableData'
import OrderTableData from './OrderTableData'

const TableData: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const tableHub = () => {
    if (currentLevel !== LevelCode.Member) {
      return <LevelTableData />
    }
    return <MemberTableData />
  }
  return (
    <>
      <LevelBreadcrumb />
      {tableHub()}
    </>
  )
}

export default TableData
