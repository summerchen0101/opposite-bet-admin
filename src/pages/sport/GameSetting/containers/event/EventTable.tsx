import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { usePopupProvider } from '../../context/PopupProvider'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
interface TableItem {
  id: string
}

const data: TableItem[] = [...Array(3)].map((t, i) => ({
  id: i.toString(),
}))
const columns: ColumnsType<TableItem> = [
  { title: '代碼', render: (_, row) => 'FULL', width: 150 },
  { title: '名稱', render: (_, row) => '全場', width: 150 },
  {
    title: '操作',
    render: (_, row) => {
      const [visible, setVisible] = usePopupProvider('eventForm')
      return (
        <Space>
          <IconLink
            icon={<EditOutlined />}
            label="編輯"
            onClick={() => setVisible(true)}
          />
          <PopupConfirm>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 80,
  },
]
const EventTable: React.FC = () => {
  const [listVisible, setListVisible] = usePopupProvider('eventList')
  const [formVIsible, setFormVisible] = usePopupProvider('eventForm')
  return (
    <div>
      <h3 className="text-primary">
        場次
        <Space className="float-right">
          <Button
            size="small"
            type="primary"
            onClick={() => setFormVisible(true)}
          >
            場次新增
          </Button>
          <Button size="small" onClick={() => setListVisible(true)}>
            更多
          </Button>
        </Space>
      </h3>
      <TableSets
        columns={columns}
        data={data}
        pagination={false}
        scroll={null}
      />
    </div>
  )
}

export default EventTable
