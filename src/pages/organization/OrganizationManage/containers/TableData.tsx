import React, { useContext, useState } from 'react'
import { MemberLevelTable, TopLevelTable, MainLevelTable } from './levelTable'
import { useTablePicker } from './TablePickerProvider'

const TableData: React.FC = () => {
  const { currentTable } = useTablePicker()

  switch (currentTable) {
    case 'member':
      return <MemberLevelTable />
    case 'main':
      return <MainLevelTable />
    case 'top':
      return <TopLevelTable />
  }
}

export default TableData
