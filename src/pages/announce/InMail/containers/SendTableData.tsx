import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { getFakeID } from '@/utils/helper'
import { toDateTime } from '@/utils/transfer'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import moment from 'moment'
import { usePopupProvider } from '../context/PopupProvider'
interface TableItem {
  id: string
}
const columns: ColumnsType<TableItem> = [
  {
    title: '標題',
    width: 180,
    render: (_, row) => {
      const setVisible = usePopupProvider('viewSent')[1]
      return <a onClick={() => setVisible(true)}>反水活動修改</a>
    },
  },
  {
    title: '收件人',
    width: 180,
    render: (_, row) => 'gogoro99, momo88, uaa9 ...',
  },
  {
    title: '收件人數量',
    width: 100,
    render: (_, row) => 30,
  },
  {
    title: '讀取數量',
    width: 100,
    render: (_, row) => 4,
  },
  {
    title: '發送時間',
    render: (_, row) => toDateTime(moment().unix()),
    width: 140,
  },
  {
    title: '操作',
    render(_, row) {
      return (
        <Space size="small">
          <IconLink icon={<DeleteOutlined />} label="刪除" />
        </Space>
      )
    },
    width: 50,
  },
]

const data = [...Array(50)].map((t, i) => ({
  id: getFakeID(),
}))
const SendTableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default SendTableData
