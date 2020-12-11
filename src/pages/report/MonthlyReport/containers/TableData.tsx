import { IconLink, TableSets, ColorText } from '@/components'
import { FilterFilled } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const columns = [
  {
    title: '投注資訊',
    children: [
      {
        title: '帳號/名稱',
        width: 100,
        render: (_, row) => 'gogo[陳]',
      },
      {
        title: '結算額',
        width: 120,
        render: (_, row) => '-',
      },
    ],
  },

  {
    title: '本層總額',
    children: [
      {
        title: '佔成金額',
        width: 140,
        render: (_, row) => <ColorText red>-75</ColorText>,
      },
      {
        title: '手續費',
        width: 120,
        render: (_, row) => '0',
      },
    ],
  },
  {
    title: '下層總額',
    children: [
      {
        title: '佔成金額',
        width: 140,
        render: (_, row) => <ColorText green>8,154,662</ColorText>,
      },
      {
        title: '手續費',
        width: 120,
        render: (_, row) => '0',
      },
    ],
  },

  {
    title: '應交收額',
    render: (_, row) => <ColorText green>8,154,586</ColorText>,
    width: 140,
  },
  {
    title: '已交收額',
    width: 120,
    render: (_, row) => '0',
  },

  {
    title: '交收紀錄',
    children: [
      {
        title: '未交收額',
        width: 140,
        render: (_, row) => <ColorText red>8,154,586.22</ColorText>,
      },
      {
        title: '未結算額',
        width: 120,
        render: (_, row) => '75.98',
      },
      {
        title: '結算次數',
        render: (_, row) => {
          const [visible, setVisible] = usePopupProvider('checkoutHistory')
          return <a onClick={() => setVisible(true)}>0</a>
        },
        width: 120,
      },
    ],
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = usePopupProvider('checkoutForm')
      return (
        <Button size="small" type="primary" onClick={() => setVisible(true)}>
          結算
        </Button>
      )
    },
    width: 70,
  },
]

const data = [...Array(5)].map((t, i) => ({ id: i }))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
