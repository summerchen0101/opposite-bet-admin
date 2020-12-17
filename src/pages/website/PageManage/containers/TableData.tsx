import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'
import { useDispatch } from 'react-redux'
import { toggleEditModal } from '../reducer'

const columns = [
  {
    title: '名稱',
    render: (_, row) => row.name,
  },
  {
    title: '狀態',
    render: (_, row) => <Text color="success">啟用</Text>,
    width: 100,
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-17 17:22:10
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const dispatch = useDispatch()
      const handleEdit = () => dispatch(toggleEditModal(true))
      return (
        <Space size="small">
          <IconLink icon={<EditFilled />} label="編輯" onClick={handleEdit} />
        </Space>
      )
    },
    width: 80,
  },
]

const data = [
  { id: 1, name: '關於我們' },
  { id: 2, name: '聯絡我們' },
  { id: 3, name: '頁尾' },
]
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} pagination={false} />
}

export default TableData
