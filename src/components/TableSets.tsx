import Table from '@/components/Table'
import TableFilter from '@/components/TableFilter'
import { ColumnType } from 'antd/lib/table'
import React, { useEffect } from 'react'
interface IProps {
  data: any[]
  columns: (ColumnType<any> & { allowFiltered?: boolean })[]
}
const TableSets: React.FC<IProps> = ({ data, columns }) => {
  let filterdColumns = []
  useEffect(() => {
    filterdColumns = columns
      .filter((t) => t.allowFiltered)
      .map((t) => ({ label: t.title, value: t.dataIndex }))
  }, [])
  return (
    <TableFilter display={false} columns={filterdColumns}>
      <Table data={data} columns={columns} />
    </TableFilter>
  )
}

export default TableSets
