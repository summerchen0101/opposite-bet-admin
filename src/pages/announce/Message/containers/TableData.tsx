import { IconLink, TableSets } from '@/components'
import { messageTypeOpts } from '@/lib/options'
import { toDateTime, toOptionName } from '@/utils/transfer'
import { DeleteOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Message } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<Message> = [
  {
    title: '標題',
    width: 180,
    render: (_, row) => {
      const [visible, setVisible] = usePopupProvider('viewMessage')
      const { getFormData } = useAPIService()
      const handleView = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return <a onClick={() => handleView(row.id)}>{row.title}</a>
    },
  },
  {
    title: '收件人',
    width: 180,
    render: (_, row) => {
      const targetType = toOptionName(messageTypeOpts, row.member_type)
      return `[${targetType}] ${
        row.is_all ? '全部' : row.receiver_accs.toString()
      }`
    },
  },
  {
    title: '收件人數量',
    width: 180,
    render: (_, row) => (row.is_all ? '-' : row.receiver_accs.length),
  },
  {
    title: '讀取數量',
    width: 180,
    render: (_, row) => (row.is_all ? '-' : row.read_count),
  },
  {
    title: '發送時間',
    width: 180,
    render: (_, row) => toDateTime(row.created_at),
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const { onDelete } = useAPIService()
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
