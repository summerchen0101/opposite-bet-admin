import { IconLink, TableSets } from '@/components'
import { toDateTime } from '@/utils/transfer'
import { Checkbox, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SettingOutlined,
  FormOutlined,
} from '@ant-design/icons'
import React, { useEffect } from 'react'
import useMultiPicker from '@/utils/hooks/useMultiPicker'
import { usePopupProvider } from '../../GameManage/context/PopupProvider'
import { GameControlPanel } from '../../routes'
import { Link, useHistory } from 'react-router-dom'

interface TableItem {
  id: string
}

const data: TableItem[] = [...Array(10)].map((t, i) => ({
  id: i.toString(),
}))

const TableData: React.FC = () => {
  const { items, addAll, removeAll, removeOne, addOne } = useMultiPicker(
    data.map((t) => t.id),
  )
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
          const [visible, setVisible] = usePopupProvider('resultForm')
          return <a onClick={() => setVisible(true)}>添加</a>
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
  const columns: ColumnsType<TableItem> = [
    { title: '賽事編號', render: (_, row) => '3381' },
    { title: '比賽時間', render: (_, row) => toDateTime(Date.now()) },
    { title: '帳務日期', render: (_, row) => '2020-12-31' },
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
    { title: '狀態', render: (_, row) => '已結單' },
    ...eventsColumn,
  ]
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData
