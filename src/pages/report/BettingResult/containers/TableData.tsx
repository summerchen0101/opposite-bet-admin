import TableSets from '@/components/TableSets'
import { LevelCode } from '@/lib/enums'
import { levelOpts } from '@/lib/options'
import { Checkbox, Form, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'

const data = [...Array(10)].map((t, i) => ({
  id: i,
}))
const TableData: React.FC = () => {
  const levels = levelOpts.filter((t) => t.value !== LevelCode.Member)
  const [displayLevels, setDisplayLevels] = useState(levels.map((t) => t.value))

  const levelColumns = levels
    .filter((t) => displayLevels.includes(t.value))
    .map((t) => ({
      title: t.label,
      children: [
        {
          title: '上級返水',
          render: (_, row) => '-',
          width: 100,
        },
        {
          title: '未拆帳',
          render: (_, row) => '-',
          width: 100,
        },
        {
          title: '結果',
          render: (_, row) => '-',
          width: 100,
        },
      ],
    })) as ColumnsType<{ id: number }>
  const columns: ColumnsType<{ id: number }> = [
    {
      title: '帳號/暱稱',
      width: 130,
      render: (_, row) => 'gogoro[夏]',
    },
    {
      title: '注單筆數',
      width: 100,
      render: (_, row) => 10,
    },
    {
      title: '投注金額',
      width: 100,
      render: (_, row) => 1000,
    },
    {
      title: '有效投注',
      width: 100,
      render: (_, row) => 800,
    },
    {
      title: '返水',
      width: 100,
      render: (_, row) => '-',
    },
    {
      title: '結果',
      width: 100,
      render: (_, row) => '-',
    },
    ...levelColumns,
  ]
  return (
    <>
      <Space className="mb-1">
        <span>顯示：</span>
        <Checkbox.Group
          options={levels}
          value={displayLevels}
          onChange={(values) => {
            setDisplayLevels(values as LevelCode[])
          }}
        />
      </Space>
      <TableSets columns={columns} data={data} scroll={{ x: 1800 }} />
    </>
  )
}

export default TableData
