import { ColorText } from '@/components'
import TableSets from '@/components/TableSets'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'

const data = [...Array(10)].map((t, i) => ({
  id: i,
}))
const MemberTableData: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const columns = [
    { title: '會員', width: 100, render: (_, row) => 'momo(毛毛)' },
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
      render: (_, row) => <ColorText green>10,000.00</ColorText>,
    },
    {
      title: '有效投注額',
      width: 140,
      render: (_, row) => <ColorText green>10,000.00</ColorText>,
    },
    {
      title: '中獎金額',
      width: 120,
      render: (_, row) => <ColorText green>2,000.00</ColorText>,
    },
    {
      title: '彩金',
      width: 100,
      render: (_, row) => '0.00',
    },
    {
      title: '會員小計',
      width: 100,
      render: (_, row) => <ColorText red>-7,317.94</ColorText>,
    },
  ]
  return <TableSets columns={columns} data={data} />
}

export default MemberTableData
