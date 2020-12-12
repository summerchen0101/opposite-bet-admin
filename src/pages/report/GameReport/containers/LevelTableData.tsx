import { ColorText } from '@/components'
import TableSets from '@/components/TableSets'
import { getLevelCode, getLevelName } from '@/utils/transfer'
import qs from 'qs'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import LevelBreadcrumb from './LevelBreadcrumb'

const data = [...Array(10)].map((t, i) => ({
  id: i,
}))
const LevelTableData: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const columns = [
    {
      title: '一般資訊',
      children: [
        {
          title: getLevelName(currentLevel),
          width: 140,
          render: (_, row) => 'sky123[天天]',
        },
        {
          title: getLevelName(getLevelCode(currentLevel, 1)),
          width: 100,
          render: (_, row) => {
            const query = qs.stringify(
              {
                parent: currentLevel,
              },
              { addQueryPrefix: true },
            )
            const location = useLocation()
            return <Link to={`${location.pathname}${query}`}>5</Link>
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
  ]
  return <TableSets columns={columns} data={data} scroll={{ x: 1800 }} />
}

export default LevelTableData
