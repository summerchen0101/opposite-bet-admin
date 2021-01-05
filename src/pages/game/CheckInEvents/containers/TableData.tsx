import { ColorText, IconLink, TableSets } from '@/components'
import { Button, Checkbox, Space, Switch } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../../context/PopupProvider'
import { useAPIService } from '../service'
import {
  CloseCircleOutlined,
  SettingOutlined,
  FormOutlined,
} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import useMultiPicker from '@/utils/hooks/useMultiPicker'
import { EventControl } from '../../routes'

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 99 }]
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
        title: '筆數',
        render: (_, row) => {
          const [visible, setVisible] = usePopupProvider('gameDetail')
          return <a onClick={() => setVisible(true)}>{count}</a>
        },
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
    { title: '賽事編號', render: (_, row) => '3381' },
    {
      title: '比賽時間',
      render: (_, row) => '2020-10-20 12:22:11',
      width: 200,
    },
    { title: '帳務日期', render: (_, row) => '2020-12-31', width: 150 },
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
    { title: '狀態', render: (_, row) => <ColorText green>啟用</ColorText> },
    ...eventsColumn,
    {
      title: '操作',
      render: (_, row) => {
        const [, setVisible] = usePopupProvider('createForm')
        return (
          <Space>
            <Checkbox
              checked={items.includes(row.id)}
              onChange={(e) =>
                e.target.checked ? addOne(row.id) : removeOne(row.id)
              }
            />
            {/* <IconLink label="啟用" icon={<CheckCircleOutlined />} /> */}
            <IconLink label="停用" icon={<CloseCircleOutlined />} color="red" />
            <IconLink
              label="控盤"
              icon={
                <Link
                  to={EventControl.path}
                  target="_blank"
                  className="text-default"
                >
                  <SettingOutlined />
                </Link>
              }
            />
            <IconLink
              label="編輯"
              icon={<FormOutlined />}
              onClick={() => setVisible(true)}
            />
          </Space>
        )
      },
      width: 130,
    },
  ]
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData
