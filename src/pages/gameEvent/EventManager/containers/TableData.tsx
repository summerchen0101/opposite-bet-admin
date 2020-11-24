import { Table } from 'antd'
import React from 'react'
import { selectTableData, useTypedSelector } from '../selectors'
import { createColumns } from './createColumns'

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <Table columns={createColumns(data)} dataSource={data} />
}

export default TableData
