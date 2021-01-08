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
    title: '申請單類型',
    render: (_, row) => '線下充值',
    width: 120,
  },
  {
    title: '金額',
    render: (_, row) => '1000',
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
    title: '支付方式',
    render: (_, row) => (
      <>
        (007)第一商業銀行
        <br />
        23123122314412
      </>
    ),
    width: 120,
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
    title: '申請狀態',
    render: (_, row) => <ColorText>已過期</ColorText>,
    width: 180,
  },
  {
    title: '申請時間',
    render: (_, row) => '2020-12-12 22:00:22',
    width: 200,
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

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1900 }} />
}

export default TableData
