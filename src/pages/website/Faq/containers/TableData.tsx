import { IconLink, TableSets, Text } from '@/components'
import { DeleteOutlined, EditOutlined, MenuOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
const columns = [
  {
    title: '排序',
    width: 70,
    render: (_, row) => <MenuOutlined />,
  },
  {
    title: '分類',
    width: 140,
    render: (_, row) => '儲存相關',
  },
  {
    title: '標題',
    width: 140,
    render: (_, row) => <a>如何儲值</a>,
  },
  {
    title: '另開視窗',
    width: 80,
    render: (_, row) => '是',
  },
  {
    title: '狀態',
    render: (_, row) => <Text color="success">啟動</Text>,
    width: 80,
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-17 17:22:10
      </>
    ),
    width: 150,
  },
  {
    title: '操作',
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      return (
        <Space size="small">
          <IconLink icon={<EditOutlined />} label="編輯" />
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
      )
    },
    width: 70,
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
