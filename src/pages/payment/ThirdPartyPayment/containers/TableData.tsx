import { ColorText, IconLink, PopupConfirm, TableSets } from '@/components'
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
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '第三方平台',
    render: (_, row) => '57PAY',
    width: 100,
  },
  {
    title: '支付類型',
    render: (_, row) => '微信支付',
    width: 100,
  },
  {
    title: '名稱',
    render: (_, row) => 'Galexy正式帳號',
    width: 150,
  },
  {
    title: '手續費',
    render: (_, row) => '3%',
    width: 200,
  },
  {
    title: '最低充值金額',
    render: (_, row) => '-',
    width: 200,
  },
  {
    title: '最高充值金額',
    render: (_, row) => '-',
    width: 200,
  },
  {
    title: '單日充值上限',
    render: (_, row) => '-',
    width: 200,
  },
  {
    title: '累計充值上限',
    render: (_, row) => '-',
    width: 200,
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
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-12 22:00:22
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const { getFormData, onDelete, changeActive } = useAPIService()
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
          <IconLink icon={<EditFilled />} label="編輯" />
          <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 80,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1300 }} />
}

export default TableData
