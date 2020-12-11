import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { usePopupProvider } from '../context/PopupProvider'
import { FilterFilled } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '投注資訊',
    width: 120,
    children: [
      {
        title: '代理商',
        width: 100,
        render: (_, row) => '-',
      },
      {
        title: '日期',
        width: 120,
        render: (_, row) => '2020-12-01',
      },
      {
        title: '注單錯誤',
        width: 140,
        render: (_, row) => '0',
      },
      {
        title: '已取消回滾',
        width: 120,
        render: (_, row) => '58',
      },
      {
        title: '已開獎',
        render: (_, row) => '0',
        width: 140,
      },
      {
        title: '下注中',
        width: 120,
        render: (_, row) => '135',
      },
      {
        title: '已完成注單',
        width: 140,
        render: (_, row) => '505',
      },
    ],
  },

  {
    title: '結算資料',
    dataIndex: 'registerCount',
    width: 120,
    children: [
      {
        title: '筆數',
        width: 140,
        render: (_, row) => '-',
      },
      {
        title: '注額',
        width: 120,
        render: (_, row) => '-',
      },
      {
        title: '會員結果',
        width: 140,
        render: (_, row) => '-',
      },
      {
        title: '公司結果',
        width: 120,
        render: (_, row) => '-',
      },
      {
        title: '加盟主結果',
        width: 140,
        render: (_, row) => '-',
      },
      {
        title: '大股東結果',
        width: 120,
        render: (_, row) => '-',
      },
      {
        title: '股東結果',
        width: 120,
        render: (_, row) => '-',
      },
      {
        title: '總代理結果',
        width: 120,
        render: (_, row) => '-',
      },
      {
        title: '代理結果',
        width: 120,
        render: (_, row) => '-',
      },
    ],
  },
  {
    title: () => (
      <>
        <Space size="small">操作</Space>
        <IconLink
          icon={<FilterFilled />}
          style={{ float: 'right', marginBottom: -4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = usePopupProvider('checkoutForm')
      return (
        <Button size="small" type="primary" onClick={() => setVisible(true)}>
          重新結算
        </Button>
      )
    },
    width: 120,
  },
]

const data = [...Array(50)].map((t, i) => ({
  id: i,
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
