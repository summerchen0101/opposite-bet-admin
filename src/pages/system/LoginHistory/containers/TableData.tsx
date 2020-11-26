import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '會員帳號',
    dataIndex: 'account',
    width: 100,
    render: () => 'summer99',
  },
  {
    title: '角色',
    dataIndex: 'firstDepositCount',
    width: 100,
    render: () => '管理員',
  },
  {
    title: '狀態',
    dataIndex: 'firstDepositTotal',
    width: 80,
    render: () => <Text color="danger">阻擋</Text>,
  },
  {
    title: '歷史登入IP',
    dataIndex: 'onceAgainDepositCount',
    width: 120,
    render: () => '2019-07-01 10:54:36',
  },
  {
    title: '歷史登入時間',
    dataIndex: 'onceAgainDepositTotal',
    width: 150,
    render: () => '2019-07-01 10:54:36',
  },
  {
    title: '是否登入成功',
    dataIndex: 'depositCount',
    width: 80,
    render: () => <Text color="danger">失敗</Text>,
  },
  {
    title: '歷程建立時間',
    dataIndex: 'depositTotal',
    width: 150,
    render: () => '2019-07-01 10:54:36',
  },
  {
    title: () => (
      <IconLink
        icon={<FilterFilled />}
        style={{ float: 'right', marginBottom: -4 }}
      />
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    width: '40px',
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
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
  })
}
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
