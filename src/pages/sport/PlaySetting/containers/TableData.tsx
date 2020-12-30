import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '玩法細項',
    width: 80,
    align: 'center',
    render: (_, row) => '0-1',
  },
  {
    title: '獲利(%)',
    width: 80,
    render: (_, row) => '9%',
  },
  {
    title: '可交易量',
    width: 120,
    render: (_, row) => '4,000,000',
  },
  {
    title: '降賠',
    width: 180,
    render: (_, row) => '10,000 以上降 0.1%',
  },
  {
    title: '單注上限',
    width: 120,
    render: (_, row) => '10,000',
  },
  {
    title: '單注下限',
    width: 120,
    render: (_, row) => '100',
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
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1000 }} />
}

export default TableData
