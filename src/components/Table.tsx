import { Table as AntTable } from 'antd'
import { ColumnsType, ColumnType } from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface TableProps<T extends { key: number }> {
  data: T[]
  columns: ColumnsType<T>
}

const StyledTable = styled(AntTable)`
  .ant-table-sticky-header {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  .ant-table-cell {
    text-align: center;
  }
`

const Table = <T extends { key: number }>(props: TableProps<T>) => {
  const [columnsWithKey, setColumnsWithKey] = useState([])
  useEffect(() => {
    setColumnsWithKey(
      props.columns.map((t) => ({
        ...t,
        key: t.key,
      })),
    )
  }, [])
  return (
    <StyledTable
      bordered
      size="small"
      dataSource={props.data}
      columns={columnsWithKey}
      scroll={{ x: 1000 }}
      sticky={{ offsetHeader: 0 }}
      pagination={{ pageSize: 30 }}
    />
  )
}

export default Table
