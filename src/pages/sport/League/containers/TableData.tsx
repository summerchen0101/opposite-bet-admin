import { ColorText } from '@/components'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { toDateTime } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EditFilled,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { League } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<League> = [
  {
    title: '名稱',
    width: 180,
    render: (_, row) => row.name,
  },
  {
    title: '365代碼',
    width: 180,
    render: (_, row) => row.bet365_code,
  },
  {
    title: '球種',
    width: 120,
    render: (_, row) => row.game.name,
  },
  // {
  //   title: '國家',
  //   width: 100,
  //   render: (_, row) => row.country.name,
  // },
  // {
  //   title: '體育',
  //   width: 100,
  //   render: (_, row) => row.sport.name,
  // },
  {
    title: '創建時間',
    width: 180,
    render: (_, row) => toDateTime(row.created_at),
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
    title: '更新時間',
    width: 200,
    render: (_, row) => toDateTime(row.updated_at),
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const { getFormData, changeActive } = useAPIService()
      const handleEdit = async () => {
        await getFormData(row.id)
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
          <IconLink icon={<EditFilled />} label="編輯" onClick={handleEdit} />
          {/* <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm> */}
        </Space>
      )
    },
    width: 80,
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
