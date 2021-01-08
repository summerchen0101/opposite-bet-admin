import { ColorText, IconLink, TableSets } from '@/components'
import { FileSearchOutlined, FormOutlined, EditFilled } from '@ant-design/icons'
import { Popover, Space, Tabs } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '上層',
    render: (_, row) => (
      <>
        代理
        <br />
        apple[果]
      </>
    ),
    width: 120,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => 'agent1(王)',
    width: 120,
  },
  {
    title: '帳戶狀態',
    render: (_, row) => <ColorText>等待審核</ColorText>,
    width: 80,
  },
  {
    title: '會員帳戶名稱',
    render: (_, row) => '中國信託商業銀行 (822)',
    width: 150,
  },
  {
    title: '會員帳戶帳號',
    render: (_, row) => '王先生 112233445566 (預設)',
    width: 150,
  },
  {
    title: '出金次數',
    render: (_, row) => 1,
    width: 80,
  },
  {
    title: '出金總額',
    render: (_, row) => '1,000',
    width: 100,
  },
  {
    title: '備註(後台)',
    render: (_, row) => (
      <Popover content={<>123123</>}>
        <IconLink icon={<FileSearchOutlined />} />
      </Popover>
    ),
    width: 80,
  },
  {
    title: '備註(會員端)',
    render: (_, row) => (
      <Popover content={<>123123</>}>
        <IconLink icon={<FileSearchOutlined />} />
      </Popover>
    ),
    width: 100,
  },
  {
    title: '最後出金紀錄',
    render: (_, row) => (
      <>
        2900.00
        <br />
        1個月前
      </>
    ),
    width: 110,
  },
  {
    title: '審核人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-12 22:00:22
      </>
    ),
    width: 180,
  },
  {
    title: '操作',
    render(_, row) {
      const [, setVisible] = usePopupProvider('createForm')
      const [, setDetailVisible] = usePopupProvider('detail')
      const { getFormData, onDelete, changeActive } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<EditFilled />}
            label="審核"
            onClick={() => handleEdit(row.id)}
          />
          <IconLink
            icon={<FileSearchOutlined />}
            label="詳細"
            onClick={() => setDetailVisible(true)}
          />
        </Space>
      )
    },
    width: 100,
  },
]

const statusTypes = [
  { label: '全部', value: 1 },
  { label: '封存區', value: 2 },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return (
    <Tabs defaultActiveKey="1" onChange={(key) => {}}>
      {statusTypes.map((t) => (
        <Tabs.TabPane tab={t.label} key={t.value}>
          <TableSets columns={columns} data={data} scroll={{ x: 1600 }} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default TableData
