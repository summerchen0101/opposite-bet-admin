import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { usePopupProvider } from '../context/PopupProvider'
import { FilterFilled } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'
import { ColorText } from '@/components'

const columns = [
  {
    title: '一般資訊',
    children: [
      {
        title: '廠商',
        width: 140,
        render: (_, row) => 'sky123[天天]',
      },
      {
        title: '股東',
        width: 100,
        render: (_, row) => {
          return <a>5</a>
        },
      },
    ],
  },
  {
    title: '注單統計',
    children: [
      {
        title: '筆數',
        width: 100,
        render: (_, row) => {
          return <a>100</a>
        },
      },
      {
        title: '注額',
        width: 140,
        render: (_, row) => <ColorText green>3,119,687.24</ColorText>,
      },
      {
        title: '有效投注額',
        width: 140,
        render: (_, row) => <ColorText green>80,967.58</ColorText>,
      },
      {
        title: '中獎金額',
        width: 120,
        render: (_, row) => <ColorText green>3,167,005.18</ColorText>,
      },
      {
        title: '彩金',
        width: 100,
        render: (_, row) => '0.00',
      },
    ],
  },
  {
    title: '會員',
    children: [
      {
        title: '會員退水',
        width: 100,
        render: (_, row) => '0.00',
      },
      {
        title: '會員紅利',
        width: 100,
        render: (_, row) => '0.00',
      },
      {
        title: '會員小計',
        width: 100,
        render: (_, row) => <ColorText green>47,317.94</ColorText>,
      },
      {
        title: '佔成(%)',
        width: 100,
        render: (_, row) => '40%',
      },
      {
        title: '佔比額度',
        width: 100,
        render: (_, row) => <ColorText red>-18,927.17</ColorText>,
      },
      {
        title: '退水',
        width: 100,
        render: (_, row) => '0.00',
      },
      {
        title: '退佣',
        width: 100,
        render: (_, row) => '0.00',
      },
    ],
  },
  {
    title: '成本支出',
    children: [
      {
        title: '代理退水',
        width: 100,
        render: (_, row) => '0.00',
      },
      {
        title: '會員退水',
        width: 100,
        render: (_, row) => '0.00',
      },
      {
        title: '會員紅利',
        width: 100,
        render: (_, row) => '0.00',
      },
    ],
  },
  {
    title: '小計',
    width: 100,
    render: (_, row) => '0.00',
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
      const [visible, setVisible] = usePopupProvider('checkoutForm')
      return (
        <Button size="small" type="primary" onClick={() => setVisible(true)}>
          重新結算
        </Button>
      )
    },
    width: 120,
  },
]

const data = [...Array(10)].map((t, i) => ({
  id: i,
}))
const TableData: React.FC = () => {
  return (
    <>
      <h3>全部</h3>
      <TableSets columns={columns} data={data} scroll={{ x: 1800 }} />
    </>
  )
}

export default TableData
