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
  const columns: ColumnsType<TableItem> = [
    { title: '賽事編號', render: (_, row) => '3381' },
    { title: '比賽時間', render: (_, row) => toDateTime(Date.now()) },
    { title: '帳務日期', render: (_, row) => '2020-12-31' },
    { title: '聯盟', render: (_, row) => '球友會友誼' },
    {
      title: '對陣',
      render: (_, row) => (
        <>
          韋斯咸
          <br /> 阿斯頓維拉
        </>
      ),
    },
    { title: '狀態', render: (_, row) => '已上架' },
    {
      title: '全場',
      children: [
        { title: '筆數', render: (_, row) => '0' },
        { title: '實貨量', render: (_, row) => '0.00' },
      ],
    },
    {
      title: '半場',
      children: [
        { title: '筆數', render: (_, row) => '0' },
        { title: '實貨量', render: (_, row) => '0.00' },
      ],
    },
    {
      title: (
        <Space>
          <Checkbox
            checked={items.length > 0 && items.length === data.length}
            onChange={(e) => (e.target.checked ? addAll() : removeAll())}
          />
          操作
        </Space>
      ),
      render: (_, row) => {
        return (
          <Space>
            <Checkbox
              checked={items.includes(row.id)}
              onChange={(e) =>
                e.target.checked ? addOne(row.id) : removeOne(row.id)
              }
            />
            {/* <IconLink label="上架" icon={<CheckCircleOutlined />} /> */}
            <IconLink label="下架" icon={<CloseCircleOutlined />} />
            <IconLink label="控盤" icon={<SettingOutlined />} />
            <IconLink label="編輯" icon={<FormOutlined />} />
          </Space>
        )
      },
      width: 130,
    },
  ]
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData
