import { Table as AntTable } from 'antd'
import { ColumnType, TablePaginationConfig, TableProps } from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface PopupTableProps {
  data: any[]
  columns: ColumnType<any>[]
  pagination?: false | TablePaginationConfig
}
const PopupTable: React.FC<PopupTableProps> = ({ data, columns, ...props }) => {
  const [columnsWithKey, setColumnsWithKey] = useState([])
  useEffect(() => {
    setColumnsWithKey(
      columns.map((t, i) => ({
        ...t,
        key: t.key ?? t.dataIndex ?? i,
      })),
    )
  }, [])
  return (
    <AntTable
      dataSource={data}
      columns={columnsWithKey}
      size="small"
      pagination={{ pageSize: 6 }}
      bordered
      {...props}
    />
  )
}

export default PopupTable
