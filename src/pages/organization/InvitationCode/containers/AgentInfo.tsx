import { addKeyToArrayItem } from '@/utils/transfer'
import { Card, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

let columns: ColumnsType<{ label: string; content: string }> = [
  {
    title: '標題',
    render: (_, row) => row.label,
    // className: 'bg-grey',
    width: '130px',
  },
  {
    title: '內容',
    render: (_, row) => row.content,
  },
]
columns = columns.map((t, i) => ({ id: i, ...t }))
let data = [
  { label: '代理帳號', content: '-' },
  { label: '代理层级', content: '-' },
  { label: '真實姓名', content: '-' },
  { label: '手機號碼', content: '-' },
  { label: '帳號狀態', content: '-' },
  { label: '代理團隊', content: '-' },
  { label: '註冊日期', content: '-' },
  { label: '註册 IP', content: '-' },
  { label: '上次登入時間', content: '-' },
  { label: '上次登入IP', content: '-' },
]
data = addKeyToArrayItem(data)

const AgentInfo: React.FC = () => {
  return (
    <>
      <h5>代理資訊</h5>
      <Table
        bordered
        showHeader={false}
        size="small"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </>
  )
}

export default AgentInfo
