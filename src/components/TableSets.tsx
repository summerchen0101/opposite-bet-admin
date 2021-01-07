import { ColumnsGenerator } from '@/lib/types'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Pagination, Table as AntTable } from 'antd'
import { TableProps } from 'antd/lib/table'
import React from 'react'
import styled from 'styled-components'

interface TableSetsProps<T> {
  data: T[]
  createColumns?: ColumnsGenerator<T>
  pagination?: {
    total: number
    page: number
    perpage: number
    onChange: (page: number, pageSize?: number) => void
  }
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
  pagination,
  ...props
}: TableProps<T> & TableSetsProps<T>): JSX.Element => {
  const { page, total, perpage, onChange } = pagination || {}
  return (
    <>
      <StyledTable
        bordered
        size="small"
        rowKey="id"
        dataSource={data}
        columns={addKeyToArrayItem(columns || createColumns(data))}
        scroll={{ x: 800 }}
        sticky={{ offsetHeader: -15 }}
        className="mb-1"
        pagination={false}
        {...props}
      />
      {pagination && (
        <Pagination
          size="small"
          className="float-right"
          style={{ visibility: total ? 'visible' : 'hidden' }}
          pageSize={perpage}
          total={total}
          current={page}
          onChange={onChange}
        />
      )}
    </>
  )
}

export default TableSets
