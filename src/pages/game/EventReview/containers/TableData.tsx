import { TableSets } from '@/components'
import useMultiPicker from '@/utils/hooks/useMultiPicker'
import { toDateTime } from '@/utils/transfer'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'

interface TableItem {
  id: string
}

const data: TableItem[] = [...Array(10)].map((t, i) => ({
  id: i.toString(),
}))

const TableData: React.FC = () => {
  const columns: ColumnsType<TableItem> = [
    { title: '賽事編號', render: (_, row) => '3381' },
    { title: '比賽時間', render: (_, row) => toDateTime(Date.now()) },
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
    { title: '場次', render: (_, row) => '全場' },
    {
      title: '365結果',
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
      title: '人工結果',
      align: 'center',
      render: (_, row) => '-',
      width: 80,
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
    },
    {
      title: '操作',
      render: (_, row) => {
        const [, setVisible] = usePopupProvider('resultForm')
        return (
          <Button type="primary" size="small" onClick={() => setVisible(true)}>
            人工結帳
          </Button>
        )
      },
    },
  ]
  return <TableSets columns={columns} data={data} scroll={{ x: 1500 }} />
}

export default TableData