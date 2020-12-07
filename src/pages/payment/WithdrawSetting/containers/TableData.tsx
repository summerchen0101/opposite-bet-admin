import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  EditFilled,
  FilterFilled,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { Text } from '@/components'
import { ColumnsType } from 'antd/lib/table'
import { getFakeID } from '@/utils/helper'
interface TableItem {
  id: string
}
const columns: ColumnsType<TableItem> = [
  {
    title: '編號',
    render: (_, row) => row.id,
    width: 100,
  },
  {
    title: '名稱',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '上限',
    render: (_, row) => '-',
    width: 140,
  },
  {
    title: '下限',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '單日累計上限人數',
    render: (_, row) => 2000,
    width: 140,
  },
  {
    title: '單日手續費優惠',
    render: (_, row) => 300,
    width: 120,
  },
  {
    title: '狀態',
    render: (_, row) => <Text color="danger">停用</Text>,
    width: 100,
  },
  {
    title: '更新人員',
    render: (_, row) => 'flora',
    width: 120,
  },
  {
    title: '更新時間',
    render: (_, row) => '2019-07-01 10:54:36',
    width: 200,
  },
  {
    title: () => (
      <>
        <Space size="small">操作</Space>
        <IconLink
          icon={<FilterFilled />}
          style={{ float: 'right', marginBottom: -4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      return (
        <Space size="small">
          <IconLink icon={<CheckCircleOutlined />} label="啟用" color="green" />
          <IconLink icon={<EditFilled />} label="編輯" />
        </Space>
      )
    },
    width: 70,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  id: getFakeID(),
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
