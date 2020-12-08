import { TableSets, IconLink, Text } from '@/components'
import { getFakeID } from '@/utils/helper'
import { toDateTime } from '@/utils/transfer'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import {
  FilterFilled,
  EditFilled,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import React from 'react'

interface TableItem {
  id: string
  bank: { code: string; name: string }
  updatedAt: number
  updatedBy: string
  status: boolean
}

const columns: ColumnsType<TableItem> = [
  {
    title: '編號',
    width: 100,
    render: (_, row) => row.id,
  },
  {
    title: '銀行名稱',
    width: 150,
    render: (_, row) => `${row.bank.code}-${row.bank.name}`,
  },
  {
    title: '銀行分行',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '戶名',
    width: 170,
    render: (_, row) => '-',
  },
  {
    title: '帳號',
    width: 150,
    render: (_, row) => '-',
  },
  {
    title: '用途',
    width: 150,
    render: (_, row) => '入帳, 出帳',
  },
  {
    title: '狀態',
    width: 100,
    render: (_, row) => <Text color="success">啟用</Text>,
  },
  {
    title: '備註',
    width: 130,
    render: (_, row) => '-',
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        {row.updatedBy} <br />
        {toDateTime(row.updatedAt)}
      </>
    ),
    width: 200,
  },
  {
    title: () => <IconLink icon={<FilterFilled />} />,
    fixed: ('right' as unknown) as boolean,
    width: 100,
    render: (_, row) => {
      return (
        <Space>
          {row.status ? (
            <IconLink icon={<CloseCircleOutlined />} label="停用" color="red" />
          ) : (
            <IconLink
              icon={<CheckCircleOutlined />}
              label="啟用"
              color="green"
            />
          )}
          <IconLink icon={<EditFilled />} label="編輯" />
        </Space>
      )
    },
  },
]

const data: TableItem[] = [...Array(50)].map((t, i) => ({
  id: getFakeID(),
  bank: { code: '012', name: '台北富邦銀行' },
  updatedAt: Date.now(),
  updatedBy: 'summer',
  status: true,
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
