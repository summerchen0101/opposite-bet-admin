import { TableSets } from '@/components'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  { title: '賽事編號', render: (_, row) => '3381' },
  { title: '比賽時間', render: (_, row) => '2020-12-12 08:22:11', width: 200 },
  { title: '帳務日期', render: (_, row) => '2020-12-31' },
  { title: '聯盟', render: (_, row) => '球友會友誼' },
  {
    title: '對陣',
    render: (_, row) => (
      <>
        <span className="text-primary">韋斯咸</span>
        <br /> 阿斯頓維拉
      </>
    ),
  },
  { title: '玩法', render: (_, row) => '反波膽' },
  {
    title: '自動結帳',
    align: 'center',
    render: (_, row) => '是',
    width: 80,
  },
  {
    title: '即時',
    children: [
      {
        title: '結果',
        align: 'center',
        render: (_, row) => (
          <>
            10
            <br />2
          </>
        ),
        width: 80,
      },
      {
        title: '人工',
        align: 'center',
        render: (_, row) => '-',
        width: 80,
      },
      {
        title: '進度',
        align: 'center',
        render: (_, row) => '10/13',
        width: 80,
      },
    ],
  },
  {
    title: '全場',
    children: [
      {
        title: '結果',
        align: 'center',
        render: (_, row) => (
          <>
            10
            <br />2
          </>
        ),
        width: 80,
      },
      {
        title: '人工',
        align: 'center',
        render: (_, row) => '-',
        width: 80,
      },
    ],
  },
  {
    title: '半場',
    children: [
      {
        title: '結果',
        align: 'center',
        render: (_, row) => (
          <>
            10
            <br />2
          </>
        ),
        width: 80,
      },
      {
        title: '人工',
        align: 'center',
        render: (_, row) => '-',
        width: 80,
      },
    ],
  },
  {
    title: '結帳人員/時間',
    render: (_, row) => (
      <>
        -
        <br />
        2020-12-22 10:33:12
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    render(_, row) {
      const [, setVisible] = usePopupProvider('createForm')
      const { getFormData } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => handleEdit(row.id)}
          >
            人工重結
          </Button>
        </Space>
      )
    },
    width: 100,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 99 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1700 }} />
}

export default TableData
