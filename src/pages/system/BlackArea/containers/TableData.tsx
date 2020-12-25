import { IconLink, PopupConfirm, Text } from '@/components'
import TableSets from '@/components/TableSets'
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: '國別',
    width: 130,
    render: (_, row) => '0.0.0.0',
  },
  {
    title: '端口設置',
    width: 160,
    render: (_, row) => '會員端、代理端',
  },
  {
    title: '狀態',
    width: 80,
    render: (_, row) => <Text color="success">啟用</Text>,
  },
  {
    title: '備註',
    width: 100,
    render: (_, row) => '-',
  },
  {
    title: '建立時間',
    render: (_, row) => '2019-07-01 10:54:36',
    width: 200,
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2019-07-01 10:54:36
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    key: 'control',
    render(_, row) {
      return (
        <Space size="small">
          <IconLink
            icon={<CloseCircleOutlined />}
            label="停用"
            color="red"
            // onClick={() => changeActive(row.id, false)}
          />
          <IconLink icon={<EditFilled />} label="編輯" />
          <PopupConfirm>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 80,
  },
]

const data = [...Array(10)].map((t, i) => ({
  id: i,
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
