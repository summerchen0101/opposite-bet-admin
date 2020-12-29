import { ColorText, IconLink, TableSets } from '@/components'
import { IPBlockTypeOpts, platformTypeOpts, yesNoOpts } from '@/lib/options'
import { toDateTime, toOptionName } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: 'IP位址',
    width: 180,
    render: (_, row) => row.ip,
  },
  {
    title: '類型',
    width: 110,
    render: (_, row) => toOptionName(IPBlockTypeOpts, row.ip_block_type),
  },
  {
    title: '端口設置',
    width: 180,
    render: (_, row) => toOptionName(platformTypeOpts, row.platform_type),
  },
  {
    title: '狀態',
    width: 120,
    render: (_, row) => {
      if (row.is_active) {
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>停用</ColorText>
    },
  },
  {
    title: '備註',
    width: 200,
    render: (_, row) => row.note,
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
          {row.is_active ? (
            <IconLink
              icon={<CloseCircleOutlined />}
              label="停用"
              color="red"
              onClick={() => changeActive(row.id, false)}
            />
          ) : (
            <IconLink
              icon={<CheckCircleOutlined />}
              label="啟用"
              color="green"
              onClick={() => changeActive(row.id, true)}
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
  return <TableSets columns={columns} data={data} scroll={{ x: 1300 }} />
}

export default TableData
