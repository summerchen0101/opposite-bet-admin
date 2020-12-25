import { IconLink, PopupConfirm, Text } from '@/components'
import TableSets from '@/components/TableSets'
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  FilterFilled,
} from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'

const columns = [
  {
    title: 'IP位址',
    width: 100,
    render: (_, row) => '0.0.0.0',
  },
  {
    title: '狀態',
    width: 80,
    render: (_, row) => <Text color="success">啟用</Text>,
  },
  {
    title: '建立時間',
    render: (_, row) => '2019-07-01 10:54:36',
    width: 150,
  },
  {
    title: '最後更新',
    width: 150,
    render: (_, row) => '2019-07-01 10:54:36',
  },
  {
    title: '備註',
    width: 100,
    render: (_, row) => '-',
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
