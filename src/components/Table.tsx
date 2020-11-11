import { Table as AntTable } from 'antd'
import { ColumnType } from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface TableProps {
  data: any[]
  columns: ColumnType<any>[]
}
const Table: React.FC<TableProps> = ({ data, columns, ...props }) => {
  const [columnsWithKey, setColumnsWithKey] = useState([])
  useEffect(() => {
    setColumnsWithKey(
      columns.map((t) => ({
        ...t,
        key: t.key ?? t.dataIndex,
      })),
    )
  }, [])
  return (
    <AntTable
      bordered
      size="small"
      dataSource={data}
      columns={columnsWithKey}
      scroll={{ x: 1000 }}
      sticky={{ offsetHeader: 0 }}
      pagination={{ pageSize: 30 }}
      {...props}
    />
  )
}

export default styled(Table)`
  .ant-table-sticky-header {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`
