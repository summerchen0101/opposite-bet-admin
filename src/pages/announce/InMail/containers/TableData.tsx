import React from 'react'
import { useParams } from 'react-router-dom'
import SendTableData from '../containers/SendTableData'
import RecieveTableData from '../containers/RecieveTableData'

const TableData: React.FC = () => {
  const { type } = useParams<{ type: string }>()
  if (type === 'send') {
    return <SendTableData />
  }
  return <RecieveTableData />
}

export default TableData
