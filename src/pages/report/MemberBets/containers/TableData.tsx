import { ColorText, IconLink, TableSets } from '@/components'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { PieChartOutlined } from '@ant-design/icons'
import { usePopupProvider } from '../context/PopupProvider'

const columns: ColumnsType<BlackIp> = [
  {
    title: '帳號/名稱',
    render: (_, row) => 'kathy[凱西]',
    width: 150,
  },
  {
    title: '注單筆數',
    render: (_, row) => 1,
    width: 120,
  },
  {
    title: '投注金額',
    render: (_, row) => 1000,
    width: 120,
  },
  {
    title: '有效投注',
    render: (_, row) => 1000,
    width: 120,
  },
  {
    title: '輸贏結果',
    render: (_, row) => <ColorText red>-1000</ColorText>,
    width: 120,
  },
  {
    title: '退水金額',
    render: (_, row) => <ColorText>0</ColorText>,
    width: 120,
  },
  {
    title: '拆帳',
    render: (_, row) => '足球(90%)',
    width: 120,
  },
  {
    title: '備註',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '操作',
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('detail')
      return (
        <IconLink
          icon={<PieChartOutlined />}
          label="佔成"
          onClick={() => setVisible(true)}
        />
      )
    },
    width: 80,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [...Array(3)].map((_, id) => ({ id }))
  return <TableSets columns={columns} data={data} scroll={{ x: 1200 }} />
}

export default TableData
