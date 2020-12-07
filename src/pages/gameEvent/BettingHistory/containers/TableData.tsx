import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import { BatchOpperatorDropdown, PopoverEditor } from '@/components'
import TableSets from '@/components/TableSets'
import {
  DeleteOutlined,
  FilterFilled,
  CaretDownOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Menu, Popover, Space } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const columns = [
  {
    title: '賽事編號',
    dataIndex: 'eventId',
    width: 100,
  },
  {
    title: '開賽時間',
    dataIndex: 'startAt',
    width: 150,
  },
  {
    title: '隊名',
    dataIndex: 'teams',
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
    render(value, row) {
      return (
        <PopoverEditor value={value}>
          <a className="link">{value}</a>
        </PopoverEditor>
      )
    },
    width: 150,
  },
  {
    title: '會員帳號',
    dataIndex: 'account',
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
    width: 120,
  },
  {
    title: '比分',
    dataIndex: 'score',
    width: 120,
  },
  {
    title: '金額',
    dataIndex: 'point',
    width: 150,
  },
  {
    title: '撤銷',
    dataIndex: 'rejection',
    width: 120,
  },
  {
    title: '開獎',
    dataIndex: 'opened',
    width: 120,
  },
  {
    title: '盈利',
    dataIndex: 'earning',
    width: 150,
  },
  {
    title: '下注時間',
    dataIndex: 'bettingAt',
    width: 150,
  },
  {
    title: () => (
      <>
        <Space size="small">
          <Checkbox defaultChecked={false} />
          <BatchOpperatorDropdown
            options={[
              { label: '批量刪除', onClick: () => {} },
              { label: '批量上架', onClick: () => {} },
            ]}
          />
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
    width: '130px',
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    id: i,
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
