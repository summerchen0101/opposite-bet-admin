import { PopoverEditor } from '@/components'
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
    width: '10%',
  },
  {
    title: '開賽時間',
    dataIndex: 'startAt',
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
  },
  {
    title: '聯盟',
    dataIndex: 'league',
    render(value, row) {
      return (
        <PopoverEditor value={value}>
          <a>{value}</a>
        </PopoverEditor>
      )
    },
  },
  {
    title: '國家',
    dataIndex: 'country',
    render(value, row) {
      const options = [
        { label: '巴西', value: 'opt1' },
        { label: '美國', value: 'opt2' },
      ]
      return (
        <PopoverEditor value={value} options={options}>
          <a>{value}</a>
        </PopoverEditor>
      )
    },
  },
  {
    title: '上架狀態',
    dataIndex: 'status',
    render(value, row) {
      return (
        <PopoverEditor value={value}>
          <a>{value}</a>
        </PopoverEditor>
      )
    },
  },
  {
    title: '採集時間',
    dataIndex: 'collectingTime',
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
    country: '美國',
    status: '待上架',
    collectingTime: '2020-12-02',
  })
}
const Component: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default Component
