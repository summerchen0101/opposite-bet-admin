import { ColorText } from '@/components'
import DragHandler, {
  SortableItem,
  SortableWrapper,
} from '@/components/DragHandler'
import IconLink from '@/components/IconLink'
import PopupConfirm from '@/components/PopupConfirm'
import TableSets from '@/components/TableSets'
import { toDateTime } from '@/utils/transfer'
import {
  CloseCircleOutlined,
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import arrayMove from 'array-move'
import moment from 'moment'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { EditPromoteAcitivity } from '../../routes'
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
    render: (_, row) => <DragHandler />,
    className: 'drag-visible',
  },
  {
    title: '優惠名稱',
    dataIndex: 'name',
    width: 200,
    render: (_, row) => row.name,
    className: 'drag-visible',
  },
  {
    title: '優惠期限',
    width: 200,
    render: (_, row) => (
      <>
        {toDateTime(row.startAt)} <br />
        {toDateTime(row.endAt)}
      </>
    ),
  },
  {
    title: '啟用狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => <ColorText green>啟用</ColorText>,
  },
  {
    title: '期間狀態',
    dataIndex: 'status',
    width: 120,
    render: (_, row) => <ColorText green>進行中</ColorText>,
  },
  {
    title: '更新人員/時間',
    width: 200,
    render: (_, row) => (
      <>
        {row.updatedBy} <br />
        {toDateTime(row.updatedAt)}
      </>
    ),
  },
  {
    title: '操作',
    render(_, row) {
      const history = useHistory()
      return (
        <Space size="small">
          <PopupConfirm title="請確認是否要停用?">
            <IconLink icon={<CloseCircleOutlined />} label="停用" color="red" />
          </PopupConfirm>
          <IconLink
            icon={<EditOutlined />}
            label="編輯"
            onClick={() => history.push(EditPromoteAcitivity.path)}
          />
          <IconLink icon={<CopyOutlined />} label="複製" />
          <PopupConfirm onConfirm={() => {}}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 120,
  },
]

const data = []
for (let i = 1; i <= 10; i++) {
  data.push({
    index: i,
    id: i.toString(),
    name: '會員首儲優惠',
    startAt: moment().unix(),
    endAt: moment().unix(),
    status: 1,
    updatedBy: 'frola',
    updatedAt: moment().unix(),
  })
}

const DraggableContainer = (props) => (
  <SortableWrapper
    useDragHandle
    helperClass="row-dragging"
    onSortEnd={onSortEnd}
    {...props}
  />
)

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
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  )
}

export default TableData
