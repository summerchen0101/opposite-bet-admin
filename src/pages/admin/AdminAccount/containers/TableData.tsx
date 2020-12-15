import { IconLink, PopupConfirm, TableSets, Text } from '@/components'
import { toDateTime } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnType } from 'antd/lib/table'
import React from 'react'
import { Status, User } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnType<User>[] = [
  {
    title: '管理者帳號',
    width: 120,
    render: (_, row) => <a>{row.acc}</a>,
  },
  {
    title: '真實姓名',
    width: 120,
    render: (_, row) => row.name,
  },
  {
    title: '管理者角色',
    width: 180,
    render: (_, row) => row.roles.map((t) => t.name).join(', ') || '-',
  },
  {
    title: '上次登入時間',
    width: 200,
    render: (_, row) => (row.logined_at ? toDateTime(row.logined_at) : '-'),
  },
  {
    title: '上次登入IP',
    width: 140,
    render: (_, row) => row.login_ip || '-',
  },
  {
    title: '啟用狀態',
    width: 100,
    render: (_, row) => {
      if (row.is_active) {
        return <Text color="success">啟用</Text>
      }
      return <Text color="danger">關閉</Text>
    },
  },
  {
    title: '鎖定狀態',
    width: 100,
    render: (_, row) => {
      switch (row.status) {
        case Status.Normal:
          return <Text color="success">正常</Text>
        case Status.Blocked:
          return <Text color="danger">鎖定</Text>
      }
    },
  },
  {
    title: '操作',
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = usePopupProvider('editForm')
      const {
        getFormData,
        getOptions,
        onDelete,
        changeStatus,
        changeActive,
      } = useAPIService()
      const handleEdit = async () => {
        await Promise.all([getOptions(), getFormData(row.id)])
        setVisible(true)
      }
      return (
        <Space size="small">
          {row.status === Status.Normal ? (
            <IconLink
              icon={<UnlockOutlined />}
              label="鎖定"
              onClick={() => changeStatus(row.id, Status.Blocked)}
            />
          ) : (
            <IconLink
              icon={<LockOutlined />}
              label="解鎖"
              onClick={() => changeStatus(row.id, Status.Normal)}
            />
          )}
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
            onClick={() => handleEdit()}
          />
          {/* <IconLink icon={<ClockCircleOutlined />} label="歷程" /> */}

          <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 120,
  },
]
const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
