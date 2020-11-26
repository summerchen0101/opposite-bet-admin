import { ColumnsGenerator } from '@/types'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Table as AntTable } from 'antd'
import { ColumnsType, TableProps } from 'antd/lib/table'
import React from 'react'
import styled from 'styled-components'

interface TableSetsProps<T> {
  data: T[]
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

const TableSets = <T extends { id: number | string }>({
  data,
  columns,
  createColumns,
  ...props
}: TableProps<T> & TableSetsProps<T>): JSX.Element => {
  return (
    <StyledTable
      bordered
      size="small"
      rowKey="id"
      dataSource={data}
      columns={addKeyToArrayItem(columns || createColumns(data))}
      scroll={{ x: 1000 }}
      sticky={{ offsetHeader: 0 }}
      pagination={{ pageSize: 30 }}
      {...props}
    />
  )
}

export default TableSets
