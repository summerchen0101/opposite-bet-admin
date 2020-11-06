import DeleteConfirmTip from '@/components/DeleteConfirmTip'
import IconLink from '@/components/IconLink'
import { SelectModifyPopover } from '@/components/ModifyPopover'
import TableSets from '@/components/TableSets'
import {
  StopOutlined,
  FilterFilled,
  EditFilled,
  CopyOutlined,
  EyeFilled,
} from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '排序',
    dataIndex: 'account',
    allowFiltered: true,
    width: 100,
  },
  {
    title: '優惠名稱',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '優惠期限',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: 140,
  },
  {
    title: '狀態',
    dataIndex: 'status',
    allowFiltered: true,
    width: 120,
    render: (_, row) => <Text color="success">進行中</Text>,
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
          <IconLink icon={<StopOutlined />} label="停用" />
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink icon={<CopyOutlined />} label="複製" />
          <IconLink icon={<EyeFilled />} label="開放" />
        </Space>
      )
    },
    width: 90,
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
