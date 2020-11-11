import {
  BatchOpperatorDropdown,
  PopoverEditor,
  PopupModalWithTrigger,
} from '@/components'
import DeleteConfirmTip from '@/components/DeleteConfirmTip'
import { Text, IconLink } from '@/components'
import TableSets from '@/components/TableSets'
import { EventScore } from '@/lib/routes'
import {
  ContainerOutlined,
  DeleteOutlined,
  EyeOutlined,
  FilterFilled,
  RotateLeftOutlined,
  StopOutlined,
} from '@ant-design/icons'
import { Checkbox, Space, Switch } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import ScoreForm from './ScoreForm'

const columns = [
  {
    title: '賽事編號',
    dataIndex: 'eventId',
    width: '10%',
    allowFiltered: true,
  },
  {
    title: '開賽時間',
    dataIndex: 'startAt',
    allowFiltered: true,
  },
  {
    title: '隊名',
    dataIndex: 'teams',
    render(teams) {
      if (!teams) return '-'
      return (
        <>
          <PopoverEditor value={teams[0]}>
            <a>{teams[0]}</a>
          </PopoverEditor>
          <br />
          <PopoverEditor value={teams[1]}>
            <a>{teams[1]}</a>
          </PopoverEditor>
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
    title: '筆數/實貨量',
    dataIndex: 'count',
    render(count, row) {
      return `${count}/${row.volume}`
    },
  },
  {
    title: '已開賽',
    dataIndex: 'isOpened',
    render: (isOpened) => <Text color="success">是</Text>,
    width: '80px',
  },
  {
    title: '結果',
    dataIndex: 'result',
    render: (result) => {
      if (!result) {
        return (
          <PopupModalWithTrigger
            title="添加結果"
            trigger={(setVisible) => (
              <a onClick={() => setVisible(true)}>點擊添加</a>
            )}
            content={(setVisible) => <ScoreForm setVisible={setVisible} />}
          />
        )
      }
      return (
        <>
          <span>全場波膽: {result.full}</span>
          <br />
          <span>上半波膽: {result.firstHalf}</span>
        </>
      )
    },
  },
  {
    title: () => (
      <>
        <Space size="small">
          <Checkbox defaultChecked={false} />
          <BatchOpperatorDropdown
            options={[
              { label: '批量刪除', onClick: () => {} },
              { label: '批量開放', onClick: () => {} },
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
    render: () => {
      const history = useHistory()
      return (
        <>
          <Checkbox defaultChecked={false} />
          <Space size="small" style={{ float: 'right' }}>
            <IconLink label="下架賽事" icon={<StopOutlined />} />
            <DeleteConfirmTip>
              <IconLink label="查看投注" icon={<EyeOutlined />} />
            </DeleteConfirmTip>
            <IconLink label="重置比分" icon={<RotateLeftOutlined />} />
            <IconLink
              label="比分"
              icon={<ContainerOutlined />}
              onClick={() => history.push(EventScore)}
            />
            <DeleteConfirmTip>
              <IconLink icon={<DeleteOutlined />} />
            </DeleteConfirmTip>
          </Space>
        </>
      )
    },
    width: '150px',
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
    count: 10,
    volume: 20320,
    isOpened: true,
    // result: {
    //   full: '3:2',
    //   firstHalf: '2:1',
    // },
  })
}
const Component: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default Component
