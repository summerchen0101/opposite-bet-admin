import { IconLink, TableSets } from '@/components'
import { toDateTime } from '@/utils/transfer'
import { Checkbox, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SettingOutlined,
  FormOutlined,
} from '@ant-design/icons'
import React from 'react'

interface TableItem {
  id: string
}
const columns: ColumnsType<TableItem> = [
  { title: '賽事編號', render: (_, row) => '3381' },
  { title: '比賽時間', render: (_, row) => toDateTime(Date.now()) },
  { title: '帳務日期', render: (_, row) => toDateTime(Date.now()) },
  { title: '聯盟', render: (_, row) => '球友會友誼' },
  {
    title: '對陣',
    render: (_, row) => (
      <>
        韋斯咸
        <br /> 阿斯頓維拉
      </>
    ),
  },
  { title: '狀態', render: (_, row) => '已上架' },
  {
    title: '全場',
    children: [
      { title: '筆數', render: (_, row) => '0' },
      { title: '實貨量', render: (_, row) => '0.00' },
    ],
  },
  {
    title: '半場',
    children: [
      { title: '筆數', render: (_, row) => '0' },
      { title: '實貨量', render: (_, row) => '0.00' },
    ],
  },
  {
    title: (
      <Space>
        <Checkbox />
        操作
      </Space>
    ),
    render: (_, row) => {
      return (
        <Space>
          <Checkbox />
          {/* <IconLink label="上架" icon={<CheckCircleOutlined />} /> */}
          <IconLink label="下架" icon={<CloseCircleOutlined />} />
          <IconLink label="控盤" icon={<SettingOutlined />} />
          <IconLink label="編輯" icon={<FormOutlined />} />
        </Space>
      )
    },
    width: 130,
  },
]

const data: TableItem[] = [...Array(10)].map((t, i) => ({
  id: i.toString(),
}))

const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData
