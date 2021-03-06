import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Checkbox, Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '賽事編號',
    dataIndex: 'eventId',
    width: 100,
  },
  {
    title: '比分',
    dataIndex: 'score',
    width: 120,
  },
  {
    title: '賠率',
    dataIndex: 'odds',
    width: 120,
  },
  {
    title: '類型',
    dataIndex: 'type',
    width: 120,
  },
  {
    title: () => (
      <>
        <Space size="small">
          <Checkbox defaultChecked={false} />
          操作(0)
        </Space>
        <IconLink
          icon={<FilterFilled />}
          style={{ float: 'right', marginBottom: -4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render: (text, record) => {
      return (
        <>
          <Checkbox defaultChecked={false} />
          <Space size="small" style={{ float: 'right' }}>
            <PopupConfirm>
              <IconLink icon={<DeleteOutlined />} />
            </PopupConfirm>
          </Space>
        </>
      )
    },
    width: 80,
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    id: i,
    eventId: 3123,
    score: '3:2',
    odds: 2,
    type: '全場波膽',
  })
}
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
