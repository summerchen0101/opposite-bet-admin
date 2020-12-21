import { IconLink, TableSets } from '@/components'
import { toDateTime } from '@/utils/transfer'
import { DeleteOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { News } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<News> = [
  {
    title: '標題',
    width: 180,
    render: (_, row) => {
      const [visible, setVisible] = usePopupProvider('viewMessage')
      return <a onClick={() => setVisible(true)}>{row.title}</a>
    },
  },
  {
    title: '收件人',
    width: 180,
    render: (_, row) => '所有會員',
  },
  {
    title: '收件人數量',
    width: 180,
    render: (_, row) => 30,
  },
  {
    title: '讀取數量',
    width: 180,
    render: (_, row) => 10,
  },
  {
    title: '發送時間',
    width: 180,
    render: (_, row) => toDateTime(row.updated_at),
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const { getFormData, onDelete } = useAPIService()
      return (
        <IconLink
          icon={<DeleteOutlined />}
          label="刪除"
          onClick={() => onDelete(row.id)}
        />
      )
    },
    width: 100,
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
