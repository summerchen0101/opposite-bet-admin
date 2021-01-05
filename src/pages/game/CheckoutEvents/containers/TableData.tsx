import { IconLink, TableSets } from '@/components'
import { Button, Space, Switch } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../../context/PopupProvider'
import { useAPIService } from '../service'
import { CloudSyncOutlined } from '@ant-design/icons'

const events = [
  {
    title: '全場',
    count: 3,
    volume: '3,000.00',
  },
  {
    title: '半場',
    count: 3,
    volume: '3,000.00',
  },
]
const eventsColumn = events.map(({ title, count, volume }) => ({
  title,
  children: [
    {
      title: '結果',
      render: (_, row) => {
        return (
          <>
            10 <br />1
          </>
        )
      },
      width: 80,
    },
    {
      title: '筆數',
      render: (_, row) => {
        const [visible, setVisible] = usePopupProvider('gameDetail')
        return <a onClick={() => setVisible(true)}>{count}</a>
      },
      width: 80,
    },
    {
      title: '實貨量',
      render: (_, row) => {
        const [visible, setVisible] = usePopupProvider('gameDetail')
        return <a onClick={() => setVisible(true)}>{volume}</a>
      },
    },
  ],
}))

const columns: ColumnsType<BlackIp> = [
  { title: '賽事編號', render: (_, row) => '3381', width: 100 },
  {
    title: '比賽時間',
    render: (_, row) => '2020-12-22 10:33:20',
    width: 200,
  },
  { title: '帳務日期', render: (_, row) => '2020-12-31', width: 120 },
  { title: '聯盟', render: (_, row) => '球友會友誼' },
  {
    title: '對陣',
    render: (_, row) => (
      <>
        <span className="text-primary">韋斯咸</span>
        <br /> 阿斯頓維拉
      </>
    ),
  },
  {
    title: '自動結帳',
    render: (_, row) => <Switch defaultChecked={true} />,
    width: 80,
  },
  { title: '狀態', render: (_, row) => '未結帳', width: 80 },
  ...eventsColumn,
  // {
  //   title: '操作',
  //   render: (_, row) => {
  //     const [, setVisible] = usePopupProvider('autoReview')
  //     return (
  //       <IconLink
  //         icon={<CloudSyncOutlined />}
  //         label="結帳設置"
  //         onClick={() => setVisible(true)}
  //       />
  //     )
  //   },
  //   width: 80,
  // },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 99 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData
