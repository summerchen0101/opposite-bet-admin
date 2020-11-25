import { ColumnsGenerator } from '@/types'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Table as AntTable } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface TableSetsProps<T> {
  title?: ReactNode
  data: T[]
  columns?: ColumnsType<T>
  rowKey?: any
  components?: any
  onSortEnd?: any
  scrollWidth?: number
  createColumns?: ColumnsGenerator<T>
}

const StyledTable = styled(AntTable)`
  .ant-table-sticky-header {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  /* .ant-table-cell {
    text-align: center;
  } */
`

const TableSets = <T extends { key: number }>({
  title,
  data,
  columns,
  createColumns,
  ...props
}: TableSetsProps<T>): JSX.Element => {
  return (
    <>
      {title && <h3>{title}</h3>}
      <StyledTable
        bordered
        size="small"
        dataSource={data}
        columns={addKeyToArrayItem(columns || createColumns(data))}
        scroll={{ x: 1000 }}
        sticky={{ offsetHeader: 0 }}
        pagination={{ pageSize: 30 }}
        {...props}
      />
    </>
  )
}

export default TableSets
