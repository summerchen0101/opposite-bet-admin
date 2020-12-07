import { Text, IconLink, TableSets } from '@/components'
import { getFakeID } from '@/utils/helper'
import {
  EditFilled,
  FilterFilled,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

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
    render: (_, row) => '存入',
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
    title: '控端提示',
    render: (_, row) => '-',
    width: 140,
  },
  {
    title: '銀行資料',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '收款人',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '開戶網點',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '帳號',
    render: (_, row) => 'gogog1',
    width: 120,
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
    title: '狀態',
    render: (_, row) => <Text color="danger">停用</Text>,
    width: 100,
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
