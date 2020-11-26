import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  DeleteOutlined,
  FilterFilled,
  InteractionOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '投注資訊',
    dataIndex: 'firstWithdrawalCount',
    width: 120,
    children: [
      {
        title: '代理商',
        dataIndex: 'account',
        allowFiltered: true,
        width: 100,
        render: () => '-',
      },
      {
        title: '日期',
        dataIndex: 'firstDepositCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '注單錯誤',
        dataIndex: 'firstDepositTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '已取消回滾',
        dataIndex: 'onceAgainDepositCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '已開獎',
        dataIndex: 'onceAgainDepositTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '下注中',
        dataIndex: 'depositCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '已完成注單',
        dataIndex: 'depositTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
    ],
  },

  {
    title: '結算資料',
    dataIndex: 'registerCount',
    width: 120,
    children: [
      {
        title: '筆數',
        dataIndex: 'firstWithdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '注額',
        dataIndex: 'onceAgainWithdrawalCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '會員結果',
        dataIndex: 'onceAgainWithdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '公司結果',
        dataIndex: 'withdrawalCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '加盟主結果',
        dataIndex: 'withdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => '-',
      },
      {
        title: '大股東結果',
        dataIndex: 'loginCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '股東結果',
        dataIndex: 'registerCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '總代理結果',
        dataIndex: 'loginCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
      {
        title: '代理結果',
        dataIndex: 'registerCount',
        allowFiltered: true,
        width: 120,
        render: () => '-',
      },
    ],
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
        <Button size="small" type="primary">
          重新結算
        </Button>
      )
    },
    width: 70,
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
