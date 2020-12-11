import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { usePopupProvider } from '../../context/PopupProvider'
import { Button, Select, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
interface TableItem {
  id: string
}

const data: TableItem[] = [...Array(3)].map((t, i) => ({
  id: i.toString(),
}))
const columns: ColumnsType<TableItem> = [
  { title: '代碼', render: (_, row) => 'xxx' },
  { title: '名稱', render: (_, row) => '乙組聯賽' },
  {
    title: '操作',
    render: (_, row) => {
      const [visible, setVisible] = usePopupProvider('leagueForm')
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
const LeagueTable: React.FC = () => {
  const [listVisible, setListVisible] = usePopupProvider('leagueList')
  const [formVIsible, setFormVisible] = usePopupProvider('leagueForm')
  const areaOpts = [{ label: '美國', value: 'USA' }]
  return (
    <div>
      <h3 className="text-primary">
        聯盟
        <Space className="float-right">
          <Select options={areaOpts} defaultValue="USA" size="small" />
          <Button
            size="small"
            type="primary"
            onClick={() => setFormVisible(true)}
          >
            聯盟新增
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

export default LeagueTable
