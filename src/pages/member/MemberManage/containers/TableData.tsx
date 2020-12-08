import { IconLink, Text } from '@/components'
import TableSets from '@/components/TableSets'
import { MemberDetail } from '@/pages/member/routes'
import { DeleteOutlined, EditFilled, FilterFilled } from '@ant-design/icons'
import { Popover, Space } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const columns = [
  {
    title: '會員帳號',
    width: 130,
    render: (_, row) => 'gogoro',
  },
  {
    title: '真實姓名',
    width: 120,
    render: (_, row) => '陳大明',
  },
  {
    title: '角色',
    width: 140,
    render: (_, row) => '代理商',
  },
  {
    title: '標籤',
    width: 120,
    render: (_, row) => '-',
  },
  {
    title: '總餘額',
    render: (_, row) => 1000,
    width: 140,
  },
  {
    title: '總充值',
    width: 120,
    render: (_, row) => 1000,
  },
  {
    title: '總提現',
    width: 140,
    render: (_, row) => 500,
  },
  {
    title: '註冊時間',
    width: '200px',
    render: (_, row) => '2020-09-16 14:25:42',
  },
  {
    title: '登入時間',
    width: '200px',
    render: (_, row) => (
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
    width: 120,
    render: (_, row) => <Text color="success">正常</Text>,
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
      const onEdit = () => history.push(MemberDetail.path)
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
