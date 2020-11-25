import { TableSets } from '@/components'
import React from 'react'
import { createColumns } from './createColumns'

export interface TableItem {
  key: number
  id: string
  eventId: number
  startAt: string
  teams: [string, string]
  league: string
  country: string
  count: number
  volume: number
  isOpened: boolean
  // result: {
  //   full: '3:2',
  //   firstHalf: '2:1',
  // },
}

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  key: i,
  id: i.toString(),
  eventId: 3123,
  startAt: '2020-12-02',
  teams: ['AAA', 'BBB'],
  league: '大聯盟123',
  country: '美國',
  count: 10,
  volume: 20320,
  isOpened: true,
  // result: {
  //   full: '3:2',
  //   firstHalf: '2:1',
  // },
}))

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  return <TableSets<TableItem> data={data} createColumns={createColumns} />
}

export default TableData
