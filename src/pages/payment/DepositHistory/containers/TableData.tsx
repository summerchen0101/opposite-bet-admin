import { IconLink, TableSets } from '@/components'
import { EditFilled, FileSearchOutlined } from '@ant-design/icons'
import { Popover, Space, Tabs } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '申請單號',
    render: (_, row) => 'tkHoAH8RTKSeoQfA',
    width: 100,
  },
  {
    title: '上層',
    render: (_, row) => (
      <>
        代理
        <br />
        apple[果]
      </>
    ),
    width: 150,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => 'agent1(王)',
    width: 120,
  },
  {
    title: '公司帳戶',
    render: (_, row) => (
      <>
        (812) 台新國際商業銀行
        <br />
        231232224124124
      </>
    ),
    width: 180,
  },
  {
    title: '付款方式',
    render: (_, row) => '網路匯款',
    width: 120,
  },
  {
    title: '充值金額',
    render: (_, row) => '1000.00',
    width: 120,
  },
  {
    title: '最後五碼',
    render: (_, row) => '22212',
    width: 120,
  },
  {
    title: '備註(後台）',
    render: (_, row) => (
      <Popover content={<>123123</>}>
        <IconLink icon={<FileSearchOutlined />} />
      </Popover>
    ),
    width: 120,
  },
  {
    title: '備註(會員端)',
    render: (_, row) => (
      <Popover content={<>123123</>}>
        <IconLink icon={<FileSearchOutlined />} />
      </Popover>
    ),
    width: 120,
  },
  {
    title: '申請時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 180,
  },
  {
    title: '匯款時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 180,
  },
  {
    title: '審核人員/時間',
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
    render(_, row) {
      const [, setVisible] = usePopupProvider('createForm')
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
        </Space>
      )
    },
    width: 100,
  },
]

const statusTypes = [
  { label: '等待付款', value: 1 },
  { label: '等待審核', value: 2 },
  { label: '完成核發', value: 3 },
  { label: '取消申請', value: 4 },
  { label: '拒絕退回', value: 5 },
  { label: '已過期', value: 6 },
  { label: '全部紀錄', value: 7 },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return (
    <Tabs defaultActiveKey="1" onChange={(key) => {}}>
      {statusTypes.map((t) => (
        <Tabs.TabPane tab={t.label} key={t.value}>
          <TableSets columns={columns} data={data} scroll={{ x: 1800 }} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default TableData
