import DeleteConfirmTip from '@/components/DeleteConfirmTip'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Switch, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '編號',
    dataIndex: 'account',
    allowFiltered: true,
    width: 100,
    render: () => 111,
  },
  {
    title: '標題',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 180,
    render: () => '反波膽開始',
  },
  {
    title: '開始時間',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: 180,
    render: () => '2019-08-21 19:10:08',
  },
  {
    title: '結束時間',
    dataIndex: 'onceAgainDepositCount',
    allowFiltered: true,
    width: 180,
    render: () => '2019-08-21 19:10:08',
  },
  {
    title: '網址',
    dataIndex: 'onceAgainDepositTotal',
    allowFiltered: true,
    width: 140,
    render: () => '-',
  },
  {
    title: '連結方式',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '狀態',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => <Switch defaultChecked />,
  },
  {
    title: '更新人員',
    dataIndex: 'firstWithdrawalCount',
    allowFiltered: true,
    width: 120,
    render: () => 'flora',
  },
  {
    title: '更新時間',
    dataIndex: 'depositTotal',
    allowFiltered: true,
    width: 200,
    render: (_, row) => '2019-07-01 10:54:36',
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
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
      )
    },
    width: 70,
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
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
  })
}
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
