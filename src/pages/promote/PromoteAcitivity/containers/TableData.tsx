import IconLink from '@/components/IconLink'
import PopupConfirm from '@/components/PopupConfirm'
import TableSets from '@/components/TableSets'
import Text from '@/components/Text'
import { toDateTime } from '@/utils/transfer'
import {
  CopyOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FilterOutlined,
  MenuOutlined,
  StopOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import arrayMove from 'array-move'
import React, { useState } from 'react'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
import styled from 'styled-components'

const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
))

interface TableItem {
  index: number
  id: string
  name: string
  startAt: string
  endAt: string
  status: number
  updatedBy: string
  updatedAt: string
}

const columns: ColumnsType<TableItem> = [
  {
    title: '排序',
    width: 100,
    render: () => <DragHandle />,
  },
  {
    title: '優惠名稱',
    dataIndex: 'name',
    width: 120,
    render: (_, row) => <a>{row.name}</a>,
  },
  {
    title: '優惠期限',
    width: '180px',
    render: (_, row) => (
      <>
        {toDateTime(row.startAt)}~ <br />
        {toDateTime(row.endAt)}
      </>
    ),
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => {
      switch (row.status) {
        case 1:
          return <Text color="success">進行中</Text>
        case 0:
          return <Text color="danger">未開啟</Text>
      }
    },
  },
  {
    title: '更新人員/時間',
    dataIndex: 'firstWithdrawalCount',
    width: 160,
    render: (_, row) => (
      <>
        {row.updatedBy} <br />
        {toDateTime(row.updatedAt)}
      </>
    ),
  },
  {
    title: () => (
      <>
        <Space size="small">操作</Space>
        <IconLink
          icon={<FilterOutlined />}
          style={{ float: 'right', marginBottom: -4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const [visible, setVisible] = useState(false)
      return (
        <Space size="small">
          <PopupConfirm title="請確認是否要停用?請按下是進行停用程序">
            <IconLink icon={<StopOutlined />} label="停用" />
          </PopupConfirm>
          <IconLink icon={<EditOutlined />} label="編輯" />
          <IconLink icon={<CopyOutlined />} label="複製" />
          {visible ? (
            <PopupConfirm
              title="是否要於前台隱藏？若確定，前台會員將看不到此活動。"
              onConfirm={() => setVisible(false)}
            >
              <IconLink icon={<EyeOutlined />} />
            </PopupConfirm>
          ) : (
            <PopupConfirm
              title="是否要於前台公開此活動？若確定，前台玩家將看到此活動。"
              onConfirm={() => setVisible(true)}
            >
              <IconLink icon={<EyeInvisibleOutlined />} />
            </PopupConfirm>
          )}
        </Space>
      )
    },
    width: 90,
  },
]

const data = []
for (let i = 1; i <= 10; i++) {
  data.push({
    index: i,
    id: i.toString(),
    name: '會員首儲優惠',
    startAt: new Date().getTime(),
    endAt: new Date().getTime(),
    status: 1,
    updatedBy: 'frola',
    updatedAt: new Date().getTime(),
  })
}

const SortableItem = SortableElement((props) => <tr {...props} />)
const SortableWrapper = SortableContainer((props) => <tbody {...props} />)

const DraggableContainer = (props) => (
  <SortableWrapper
    useDragHandle
    helperClass="row-dragging"
    onSortEnd={onSortEnd}
    {...props}
  />
)
const StyledDraggableContainer = styled(DraggableContainer)`
  .row-dragging {
    background: #fafafa;
    border: 1px solid #ccc;
  }

  .row-dragging td {
    padding: 16px;
    visibility: hidden;
  }

  .row-dragging .drag-visible {
    visibility: visible;
  }
`

const DraggableBodyRow = ({ className, style, ...restProps }) => {
  const index = data.findIndex((x) => x.index === restProps['data-row-key'])
  return <SortableItem index={index} {...restProps} />
}

const onSortEnd = ({ oldIndex, newIndex }) => {
  if (oldIndex !== newIndex) {
    const newData = arrayMove([].concat(data), oldIndex, newIndex).filter(
      (el) => !!el,
    )
    console.log('Sorted items: ', newData)
    // data = newData
  }
}
const TableData: React.FC = () => {
  return (
    <TableSets
      columns={columns}
      data={data}
      rowKey="index"
      components={{
        body: {
          wrapper: StyledDraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  )
}

export default TableData
