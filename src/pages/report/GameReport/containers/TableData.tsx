import { ColorText, TableSets } from '@/components'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { BettingSearch } from '../../routes'
import { Link } from 'react-router-dom'

const columns: ColumnsType<BlackIp> = [
  {
    title: '日期',
    render: (_, row) => '2020-12-22 12:33:40',
    width: 150,
  },
  {
    title: '會員數',
    render: (_, row) => <Link to={BettingSearch.path}>100</Link>,
    width: 120,
  },
  {
    title: '下注數',
    render: (_, row) => 200,
    width: 120,
  },
  {
    title: '投注金額',
    render: (_, row) => '1,020,865.00',
    width: 120,
  },
  {
    title: '有效投注金額',
    render: (_, row) => '1,010,976.50',
    width: 120,
  },
  {
    title: '退水金額',
    render: (_, row) => '0.00',
    width: 120,
  },
  {
    title: '輸贏結果',
    render: (_, row) => <ColorText red>-47,380.15</ColorText>,
    width: 120,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [...Array(3)].map((_, id) => ({ id }))
  return (
    <>
      <h3>查詢 2020-11-05 ~ 2020-11-06 結果</h3>
      <TableSets columns={columns} data={data} scroll={{ x: 1200 }} />
    </>
  )
}

export default TableData
