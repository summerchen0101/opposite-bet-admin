import { TableSets } from '@/components'
import { toDateTime } from '@/utils/transfer'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

const dataList = {
  area: [
    { code: 'USA', name: '美國' },
    { code: 'UK', name: '英國' },
    { code: 'HK', name: '香港' },
  ],
  event: [
    { code: 'FULL', name: '全場' },
    { code: 'HALF', name: '半場' },
  ],
  game: [
    { code: 'opposite', name: '反波膽' },
    { code: 'total', name: '總得分' },
  ],
  gameDatail: [
    { code: 'xxx', name: '1-0', even: 0 },
    { code: 'xxx', name: '0-1', even: 1 },
  ],
  league: [
    { code: 'xxx', name: '乙組聯賽' },
    { code: 'xxx', name: '大聯盟' },
  ],
  team: [
    { code: 'xxx', name: '奧摩尼亞' },
    { code: 'xxx', name: '奧摩尼亞' },
  ],
}
const TableData: React.FC<{ info: { title: string; code: string } }> = ({
  info,
}) => {
  interface TableItem {
    id: string
  }

  const data: TableItem[] = [...dataList[info.code]].map((t, i) => ({
    id: i.toString(),
  }))
  const columns: ColumnsType<TableItem> = [
    { title: '代碼', render: (_, row) => 'ABC', width: 150 },
    { title: '名稱', render: (_, row) => `${info.title}名稱xx`, width: 150 },
    {
      title: '操作',
      render: (_, row) => (
        <Space>
          <a>編輯</a>
          <a>刪除</a>
        </Space>
      ),
      width: 100,
    },
  ]
  return (
    <>
      <h3 className="text-primary">
        {info.title}
        <Space className="float-right">
          <Button size="small" type="primary">
            {info.title}新增
          </Button>
          <Button size="small">更多</Button>
        </Space>
      </h3>
      <TableSets
        columns={columns}
        data={data}
        pagination={false}
        scroll={null}
      />
    </>
  )
}

export default TableData
