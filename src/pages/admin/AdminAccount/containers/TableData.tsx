import { IconLink, PopupConfirm, TableSets, Text } from '@/components'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  StopOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnType } from 'antd/lib/table'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'

export interface TableItem {
  id: string
  account: string
  name: string
  role: string
  lastLogin: string
  lastIp: string
  status: boolean
  isOnline: boolean
}
const columns: ColumnType<TableItem>[] = [
  {
    title: '管理者帳號',
    width: 120,
    render: (_, row) => <a>PHMQ647</a>,
  },
  {
    title: '真實姓名',
    dataIndex: 'name',
    width: 120,
    render: (_, row) => '王大明',
  },
  {
    title: '管理者角色',
    dataIndex: 'role',
    width: 140,
    render: (_, row) => '財務管理員',
  },
  {
    title: '上次登入時間',
    dataIndex: 'lastLogin',
    width: 200,
    render: (_, row) => '2020-10-15 13:28:28',
  },
  {
    title: '上次登入IP',
    dataIndex: 'lastIp',
    width: 140,
    render: (_, row) => '0.0.0.0',
  },
  {
    title: '啟用狀態',
    dataIndex: 'status',
    width: 140,
    render: (_, row) => <Text color="success">啟用</Text>,
  },
  {
    title: '上線狀態',
    dataIndex: 'isOnline',
    width: 120,
    render: (_, row) => '線上',
  },
  {
    title: '操作',
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = usePopupProvider('editForm')
      return (
        <Space size="small">
          <IconLink icon={<StopOutlined />} label="凍結" />
          {/* <IconLink icon={<CheckCircleOutlined />} label="啟用" color="green" /> */}
          <IconLink icon={<CloseCircleOutlined />} label="停用" color="red" />
          <IconLink
            icon={<EditFilled />}
            label="編輯"
            onClick={() => setVisible(true)}
          />
          <IconLink icon={<ClockCircleOutlined />} label="歷程" />

          <PopupConfirm>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 120,
  },
]
const TableData: React.FC = () => {
  const data = [...Array(5)].map((t, i) => ({ id: i.toString() }))
  return <TableSets columns={columns} data={data} />
}

export default TableData
