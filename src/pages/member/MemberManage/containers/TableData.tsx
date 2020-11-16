import { Text, IconLink } from '@/components'
import TableSets from '@/components/TableSets'
import { FilterFilled } from '@ant-design/icons'
import { Checkbox, Popover, Space } from 'antd'
import React from 'react'
import { EditFilled, DeleteOutlined } from '@ant-design/icons'
import { IconButton } from '@/components'
import { MemberDetail } from '@/lib/routes'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const columns = [
  {
    title: '會員帳號',
    dataIndex: 'account',
    allowFiltered: true,
    width: 130,
    render: () => 'gogoro',
  },
  {
    title: '真實姓名',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
    render: () => '陳大明',
  },
  {
    title: '角色',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: 140,
    render: () => '代理商',
  },
  {
    title: '標籤',
    dataIndex: 'onceAgainDepositCount',
    allowFiltered: true,
    width: 120,
    render: () => '-',
  },
  {
    title: '總餘額',
    dataIndex: 'onceAgainDepositTotal',
    allowFiltered: true,
    width: 140,
    render: () => 1000,
  },
  {
    title: '總充值',
    dataIndex: 'depositCount',
    allowFiltered: true,
    width: 120,
    render: (_, row) => 1000,
  },
  {
    title: '總提現',
    dataIndex: 'depositTotal',
    allowFiltered: true,
    width: 140,
    render: (_, row) => 500,
  },
  {
    title: '註冊時間',
    dataIndex: 'firstWithdrawalCount',
    allowFiltered: true,
    width: '200px',
    render: () => '2020-09-16 14:25:42',
  },
  {
    title: '登入時間',
    dataIndex: 'firstWithdrawalTotal',
    allowFiltered: true,
    width: '200px',
    render: () => (
      <>
        2020-09-16 14:25:42
        <br />
        IP：
        <Popover
          content={
            <>
              裝置：desktop <br />
              系統：windows <br />
              瀏覽器：chrome
            </>
          }
        >
          <a>149.222.22.111</a>
        </Popover>
      </>
    ),
  },
  {
    title: '狀態',
    dataIndex: 'onceAgainWithdrawalCount',
    allowFiltered: true,
    width: 120,
    render: () => <Text color="success">正常</Text>,
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
      const history = useHistory()
      const onEdit = () => history.push(MemberDetail)
      return (
        <Space size="small">
          <IconLink icon={<EditFilled />} onClick={onEdit} label="編輯" />
          <IconLink icon={<DeleteOutlined />} label="停用" />
        </Space>
      )
    },
    width: 80,
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
