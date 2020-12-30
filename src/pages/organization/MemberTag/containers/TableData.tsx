import { IconLink, PopupConfirm, TableSets } from '@/components'
import { toDateTime } from '@/utils/transfer'
import { DeleteOutlined, EditFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { MemberTag } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<MemberTag> = [
  {
    title: '標籤名稱',
    width: 180,
    render: (_, row) => row.name,
  },
  {
    title: '說明',
    width: 200,
    render: (_, row) => row.content,
  },
  {
    title: '會員數',
    width: 100,
    render: (_, row) => row.member_count,
  },
  {
    title: '建立時間',
    width: 200,
    render: (_, row) => toDateTime(row.created_at),
  },
  {
    title: '更新人員/時間',
    width: 200,
    render: (_, row) => (
      <>
        {row.editor} <br />
        {toDateTime(row.updated_at)}
      </>
    ),
  },
  {
    title: '操作',
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const { getFormData, onDelete, changeActive } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<EditFilled />}
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
          <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
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
