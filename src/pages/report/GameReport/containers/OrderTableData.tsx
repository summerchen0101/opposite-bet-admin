import { ColorText, IconLink } from '@/components'
import TableSets from '@/components/TableSets'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import { FileSearchOutlined } from '@ant-design/icons'
import LevelBreadcrumb from './LevelBreadcrumb'

const OrderTableData: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const columns = [
    { title: '注單編號', width: 100, render: (_, row) => 'EA1234' },
    { title: '會員帳號', width: 100, render: (_, row) => 'momo(毛毛)' },
    {
      title: '注額',
      width: 140,
      render: (_, row) => <ColorText green>10,000.00</ColorText>,
    },
    {
      title: '有效投注額',
      width: 140,
      render: (_, row) => <ColorText green>10,000.00</ColorText>,
    },
    {
      title: '退水',
      width: 100,
      render: (_, row) => '0.00',
    },
    {
      title: '退佣',
      width: 100,
      render: (_, row) => '0.00',
    },
    {
      title: '彩金',
      width: 100,
      render: (_, row) => '0.00',
    },
    {
      title: '小費',
      width: 100,
      render: (_, row) => '0.00',
    },
    {
      title: '中獎金額',
      width: 100,
      render: (_, row) => '0.00',
    },
    {
      title: '會員小計',
      width: 100,
      render: (_, row) => <ColorText red>-7,317.94</ColorText>,
    },
    {
      title: 'IP',
      width: 100,
      render: (_, row) => (
        <>
          電腦
          <br />
          124.160.214.38
        </>
      ),
    },
    {
      title: 'IP',
      width: 100,
      render: (_, row) => <ColorText green>已結算</ColorText>,
    },
    {
      title: '下注時間',
      width: 150,
      render: (_, row) => '2020-11-18 00:01:51',
    },
    {
      title: '開獎時間',
      width: 150,
      render: (_, row) => '2020-11-18 00:01:51',
    },
    {
      title: '操作',
      width: 150,
      render: (_, row) => <IconLink icon={<FileSearchOutlined />} />,
    },
  ]
  const data = [...Array(10)].map((t, i) => ({
    id: i,
  }))
  return (
    <>
      <LevelBreadcrumb />
      <TableSets columns={columns} data={data} />
    </>
  )
}

export default OrderTableData
