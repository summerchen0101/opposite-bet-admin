import React from 'react'
import { selectCurrentLevel, useTypedSelector } from '../selectors'
import { MainLevelTable, MemberLevelTable, TopLevelTable } from './levelTable'

const TableData: React.FC = () => {
  const currentLevel = useTypedSelector(selectCurrentLevel)
  switch (currentLevel) {
    case 1:
      return <TopLevelTable />
    case 2:
      return <MainLevelTable />
    case 3:
      return <MemberLevelTable />
  }
}

export default TableData
