import Table from '@/components/Table'
import TableFilter from '@/components/TableFilter'
import { ColumnType } from 'antd/lib/table'
import React, { useEffect } from 'react'
interface TableSetsProps {
  data: any[]
  columns: ColumnType<any>[]
  rowKey?: any
  components?: any
  onSortEnd?: any
}
const TableSets: React.FC<TableSetsProps> = ({ data, columns, ...props }) => {
  let filterdColumns = []
  useEffect(() => {
    filterdColumns = columns.map((t) => ({
      label: t.title,
      value: t.dataIndex,
    }))
  }, [])
  return (
    <TableFilter display={false} columns={filterdColumns}>
      <Table data={data} columns={columns} {...props} />
    </TableFilter>
  )
}

export default TableSets
