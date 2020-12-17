import { ColorText, IconLink, PopupConfirm, TableSets } from '@/components'
import { toDateTime } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  FilePptOutlined,
  LockOutlined,
  UnlockOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnType } from 'antd/lib/table'
import React from 'react'
import { useDispatch } from 'react-redux'
import { BlockStatus, User } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { setEditId } from '../reducer'
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
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>關閉</ColorText>
    },
  },
  {
    title: '鎖定狀態',
    width: 100,
    render: (_, row) => {
      switch (row.status) {
        case BlockStatus.Normal:
          return <ColorText green>正常</ColorText>
        case BlockStatus.Blocked:
          return <ColorText red>鎖定</ColorText>
      }
    },
  },
  {
    title: '操作',
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = usePopupProvider('editForm')
      const [pwFormVisible, setPwFormVisible] = usePopupProvider('pwForm')
      const dispatch = useDispatch()
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
      const handlePassword = async (id: number) => {
        dispatch(setEditId(id))
        setPwFormVisible(true)
      }
      return (
        <Space size="small">
          {row.status === BlockStatus.Normal ? (
            <IconLink
              icon={<UnlockOutlined />}
              label="鎖定"
              onClick={() => changeStatus(row.id, BlockStatus.Blocked)}
            />
          ) : (
            <IconLink
              icon={<LockOutlined />}
              label="解鎖"
              onClick={() => changeStatus(row.id, BlockStatus.Normal)}
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
          <IconLink
            icon={<FilePptOutlined />}
            label="修改密碼"
            onClick={() => handlePassword(row.id)}
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
