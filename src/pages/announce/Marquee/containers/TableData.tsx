import { ColorText, IconLink, TableSets } from '@/components'
import { toDateTime } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
} from '@ant-design/icons'
import { Space } from 'antd'
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
    render: (_, row) => row.title,
  },
  {
    title: '另開視窗',
    width: 80,
    render: (_, row) => '是',
  },
  {
    title: '連結',
    width: 180,
    render: (_, row) => 'http://aaa.com',
  },
  {
    title: '狀態',
    width: 120,
    render: (_, row) => {
      if (row.is_active) {
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>關閉</ColorText>
    },
  },
  {
    title: '期間',
    width: 200,
    render: (_, row) =>
      row.start_at ? (
        <>
          {toDateTime(row.start_at)} <br />
          {toDateTime(row.end_at)}
        </>
      ) : (
        '-'
      ),
  },
  {
    title: '更新人員',
    width: 120,
    render: (_, row) => row.editor,
  },
  {
    title: '更新時間',
    width: 200,
    render: (_, row) => toDateTime(row.updated_at),
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = usePopupProvider('editForm')
      const { getFormData, onDelete } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          {row.is_active ? (
            <IconLink
              icon={<CloseCircleOutlined />}
              label="停用"
              color="red"
              // onClick={() => changeActive(row.id, false)}
            />
          ) : (
            <IconLink
              icon={<CheckCircleOutlined />}
              label="啟用"
              color="green"
              // onClick={() => changeActive(row.id, true)}
            />
          )}
          <IconLink
            icon={<EditFilled />}
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
          <IconLink
            icon={<DeleteOutlined />}
            label="刪除"
            onClick={() => onDelete(row.id)}
          />
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
