import { IconLink, PopupConfirm, Text } from '@/components'
import TableSets from '@/components/TableSets'
import {
  DeleteOutlined,
  EditFilled,
  FilterFilled,
  StopOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: 'IP位址',
    dataIndex: 'account',
    width: 100,
    render: (_, row) => '0.0.0.0',
  },
  {
    title: '國別',
    dataIndex: 'firstDepositCount',
    width: 80,
    render: (_, row) => '韓國',
  },
  {
    title: '狀態',
    dataIndex: 'firstDepositTotal',
    width: 80,
    render: (_, row) => <Text color="success">允許</Text>,
  },
  {
    title: '類型',
    dataIndex: 'onceAgainDepositCount',
    width: 80,
    render: (_, row) => '白名單',
  },
  {
    title: '建立時間',
    dataIndex: 'onceAgainDepositTotal',
    width: 150,
    render: (_, row) => '2019-07-01 10:54:36',
  },
  {
    title: '最後更新',
    dataIndex: 'depositCount',
    width: 150,
    render: (_, row) => '2019-07-01 10:54:36',
  },
  {
    title: '備註',
    dataIndex: 'depositTotal',
    width: 100,
    render: (_, row) => '-',
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
          <IconLink icon={<StopOutlined />} label="阻擋" />
          <IconLink icon={<EditFilled />} label="編輯" />
          <PopupConfirm>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 80,
  },
]

const data = [...Array(50)].map((t, i) => ({
  id: i,
  account: 'aaaa(小白)',
  firstDepositCount: 5,
  firstDepositTotal: 20320,
  onceAgainDepositCount: 10,
  onceAgainDepositTotal: 41232,
  firstWithdrawalCount: 5,
  firstWithdrawalTotal: 20320,
  onceAgainWithdrawalCount: 10,
  onceAgainWithdrawalTotal: 41232,
  loginCount: 20,
  registerCount: 3,
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
