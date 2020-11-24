import {
  BatchOpperatorDropdown,
  PopoverEditor,
  PopupModalWithTrigger,
} from '@/components'
import PopupConfirm from '@/components/PopupConfirm'
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
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import ScoreForm from './ScoreForm'
import { ColumnsType } from 'antd/lib/table'
import { TableItem } from '../types'
import TableContextProvider, {
  TableContext,
} from '../context/TableContextProvider'
import { useTypedSelector, selectTableData } from '../selectors'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

const TableHeaderController: React.FC = () => {
  const tableData = useTypedSelector(selectTableData)
  const { selectAll, unselectAll } = useContext(TableContext)
  const handleSelectAll = (check) =>
    check ? selectAll(tableData.map((t) => t.id)) : unselectAll()
  return (
    <>
      <Space size="small">
        <Checkbox
          defaultChecked={false}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
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
  )
}

const columns: ColumnsType<TableItem> = [
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
    title: <TableHeaderController />,
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render: (_, row) => {
      const history = useHistory()
      const { selectOne, unselectOne, selected } = useContext(TableContext)
      const isSelected = selected.includes(row.id)
      const handleSelect = (check) =>
        check ? selectOne(row.id) : unselectOne(row.id)
      return (
        <>
          <Checkbox
            defaultChecked={isSelected}
            onChange={(e) => handleSelect(e.target.checked)}
          />
          <Space size="small" style={{ float: 'right' }}>
            <IconLink label="下架賽事" icon={<StopOutlined />} />
            <IconLink label="查看投注" icon={<EyeOutlined />} />
            <IconLink label="重置比分" icon={<RotateLeftOutlined />} />
            <IconLink
              label="比分"
              icon={<ContainerOutlined />}
              onClick={() => history.push(EventScore)}
            />
            <PopupConfirm>
              <IconLink icon={<DeleteOutlined />} />
            </PopupConfirm>
          </Space>
        </>
      )
    },
    width: '150px',
  },
]

const Component: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  const { selected } = useContext(TableContext)
  return (
    <>
      {JSON.stringify(selected)}
      <TableSets columns={columns} data={data} />
    </>
  )
}

export default Component
