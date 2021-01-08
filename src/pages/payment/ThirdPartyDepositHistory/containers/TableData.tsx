import { ColorText, IconLink, TableSets } from '@/components'
import { FileSearchOutlined, FormOutlined } from '@ant-design/icons'
import { Popover, Space, Tabs } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '訂單編號',
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
    title: '付款通知狀態',
    render: (_, row) => <ColorText>等待中</ColorText>,
    width: 120,
  },
  {
    title: '訂單狀態',
    render: (_, row) => (
      <>
        <ColorText>已過期</ColorText>
        <br />
        <a>
          <FormOutlined className="mr-1" style={{ fontSize: '16px' }} />
          手動確認付款
        </a>
      </>
    ),
    width: 180,
  },
  {
    title: '付款方式',
    render: (_, row) => (
      <>
        ATM轉帳
        <br />
        (公園支付 : JR)
      </>
    ),
    width: 120,
  },
  {
    title: '充值金額',
    render: (_, row) => '1000.00',
    width: 120,
  },
  {
    title: (
      <>
        會員負擔手續費 <br />
        廠商負擔手續費
      </>
    ),
    render: (_, row) => (
      <>
        80 <br />
        80
      </>
    ),
    width: 160,
  },
  {
    title: '備註',
    render: (_, row) => (
      <Popover content={<>123123</>}>
        <IconLink icon={<FileSearchOutlined />} />
      </Popover>
    ),
    width: 80,
  },
  {
    title: '申請時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 200,
  },
  {
    title: '付款時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 200,
  },
  {
    title: '完成時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 180,
  },
  {
    title: '過期時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 180,
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
            icon={<FileSearchOutlined />}
            label="詳細"
            onClick={() => handleEdit(row.id)}
          />
        </Space>
      )
    },
    width: 100,
  },
]

const statusTypes = [
  { label: '尚未付款', value: 1 },
  { label: '已付款', value: 2 },
  { label: '已過期', value: 3 },
  { label: '全部紀錄', value: 4 },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return (
    <Tabs defaultActiveKey="1" onChange={(key) => {}}>
      {statusTypes.map((t) => (
        <Tabs.TabPane tab={t.label} key={t.value}>
          <TableSets columns={columns} data={data} scroll={{ x: 2000 }} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default TableData
