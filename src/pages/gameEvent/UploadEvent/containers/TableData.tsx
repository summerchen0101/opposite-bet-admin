import TableSets from '@/components/TableSets'
import React from 'react'
import { createColumns } from './createColumns'

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    id: i,
    eventId: 3123,
    startAt: '2020-12-02',
    teams: ['AAA', 'BBB'],
    league: '大聯盟123',
    country: '美國',
    status: '待上架',
    collectingTime: '2020-12-02',
  })
}
const Component: React.FC = () => {
  return <TableSets createColumns={createColumns} data={data} />
}

export default Component
