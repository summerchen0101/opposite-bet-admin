import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { getFakeID } from '@/utils/helper'
import { FilterFilled } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

interface TableItem {
  id: string
}

const columns: ColumnsType<TableItem> = [
  {
    title: '代理商',
    width: 100,
  },
  {
    title: () => <IconLink icon={<FilterFilled />} />,
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    width: 40,
  },
]

const data = [...Array(50)].map((t, i) => ({
  id: getFakeID(),
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
