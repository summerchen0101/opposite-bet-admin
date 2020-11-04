import DeleteConfirmTip from '@/components/DeleteConfirmTip'
import IconLink from '@/components/IconLink'
import {
  InputModifyPopover,
  SelectModifyPopover,
} from '@/components/ModifyPopover'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const columns = [
  {
    title: '賽事編號',
    dataIndex: 'eventId',
    allowFiltered: true,
    width: 100,
  },
  {
    title: '開賽時間',
    dataIndex: 'startAt',
    allowFiltered: true,
    width: 150,
  },
  {
    title: '隊名',
    dataIndex: 'teams',
    allowFiltered: true,
    render(teams) {
      if (!teams) return '-'
      return (
        <>
          <span>{teams[0]}</span>
          <br />
          <span>{teams[1]}</span>
        </>
      )
    },
    width: 120,
  },
  {
    title: '聯盟',
    dataIndex: 'league',
    allowFiltered: true,
    render(value, row) {
      return (
        <Popover content={<InputModifyPopover value={value} />} trigger="click">
          <Button type="link">{value}</Button>
        </Popover>
      )
    },
    width: 150,
  },
  {
    title: '會員帳號',
    dataIndex: 'account',
    allowFiltered: true,
    render(value, row) {
      return (
        <>
          {value} <span style={{ color: 'red' }}>[試玩]</span>
        </>
      )
    },
    width: 150,
  },
  {
    title: '類型',
    dataIndex: 'type',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '比分',
    dataIndex: 'score',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '金額',
    dataIndex: 'point',
    allowFiltered: true,
    width: 150,
  },
  {
    title: '撤銷',
    dataIndex: 'rejection',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '開獎',
    dataIndex: 'opened',
    allowFiltered: true,
    width: 120,
  },
  {
    title: '盈利',
    dataIndex: 'earning',
    allowFiltered: true,
    width: 150,
  },
  {
    title: '下注時間',
    dataIndex: 'bettingAt',
    allowFiltered: true,
    width: 150,
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
          style={{ float: 'right', marginTop: 4 }}
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
            <DeleteConfirmTip>
              <IconLink icon={<DeleteOutlined />} />
            </DeleteConfirmTip>
          </Space>
        </>
      )
    },
    width: 120,
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    eventId: 3123,
    startAt: '2020-12-02',
    teams: ['AAA', 'BBB'],
    league: '大聯盟123',
    account: 'summer123',
    type: '全場波膽',
    score: '3:3',
    point: 200,
    rejection: '未撤銷',
    opened: '已開獎',
    earning: '+1.24',
    bettingAt: '2020-12-02',
  })
}
const TableData: React.FC = () => {
  return (
    <>
      <p>＊試玩帳號不統計</p>
      <TableSets columns={columns} data={data} />
    </>
  )
}

export default TableData
