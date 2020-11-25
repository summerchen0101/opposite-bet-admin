import Table from '@/components/Table'
import TableFilter from '@/components/TableFilter'
import { ColumnsType, ColumnType, TableProps } from 'antd/lib/table'
import React, { ReactNode, useEffect } from 'react'
interface TableSetsProps<T> {
  title?: ReactNode
  data: T[]
  columns: ColumnsType<T>
  rowKey?: any
  components?: any
  onSortEnd?: any
  scrollWidth?: number
}
interface TableItem {
  key: number
  name: string
}
const TableSets = <T extends { key: number }>({
  title,
  data,
  columns,
  ...props
}: TableSetsProps<T>): JSX.Element => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <Table<T> data={data} columns={columns} {...props} />
    </>
  )
}

export default TableSets
