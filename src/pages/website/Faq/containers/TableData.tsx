import {
  ColorText,
  IconLink,
  PopupConfirm,
  TableSets,
  Text,
} from '@/components'
import { DeleteOutlined, EditOutlined, MenuOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Faq } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<Faq> = [
  {
    title: '分類',
    width: 140,
    render: (_, row) => row.catalogue.name,
  },
  {
    title: '標題',
    width: 140,
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('preview')
      const { getFormData } = useAPIService()
      const handleView = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return <a onClick={() => handleView(row.id)}>{row.title}</a>
    },
  },
  {
    title: '狀態',
    render: (_, row) => {
      if (row.is_active) {
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>停用</ColorText>
    },
    width: '80px',
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-17 17:22:10
      </>
    ),
    width: 150,
  },
  {
    title: '操作',
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const { getFormData, onDelete } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<EditOutlined />}
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
          <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 70,
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
