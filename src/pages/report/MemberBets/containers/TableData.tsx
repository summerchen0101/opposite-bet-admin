import { ColorText, IconLink, TableSets } from '@/components'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { PieChartOutlined } from '@ant-design/icons'
import { usePopupProvider } from '../context/PopupProvider'

const columns: ColumnsType<BlackIp> = [
  {
    title: '注單編號',
    render: (_, row) => 'IBT15057189171000000189',
    width: 180,
  },
  {
    title: (
      <>
        下注時間
        <br />
        帳務時間
      </>
    ),
    render: (_, row) => (
      <>
        2017/09/23 10:00:00 <br />
        2017/09/23 10:00:00
      </>
    ),
    width: 200,
  },
  {
    title: '下注內容',
    render: (_, row) => (
      <>
        足球 - 球友會友誼 全場反波膽 7.8%
        <br />
        <ColorText blue>亞利桑那響尾蛇</ColorText> vs. 芝加哥小熊
        <br />
        芝加哥小熊 7.8%
      </>
    ),
    width: 250,
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
    render: (_, row) => 0,
    width: 120,
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
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
  return (
    <>
      <h3>會員帳號 CI0F6F9E86(CI0F6F9E86)</h3>
      <TableSets columns={columns} data={data} scroll={{ x: 1200 }} />
    </>
  )
}

export default TableData
