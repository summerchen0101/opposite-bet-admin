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
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import arrayMove from 'array-move'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { EditPromoteAcitivity } from '../../routes'
import { Activity } from '../API/types'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<Activity> = [
  // {
  //   title: '排序',
  //   width: 100,
  //   render: (_, row) => <DragHandler />,
  //   className: 'drag-visible',
  // },
  {
    title: '優惠名稱',
    width: 200,
    render: (_, row) => row.title,
    className: 'drag-visible',
  },
  {
    title: '優惠期限',
    width: 200,
    render: (_, row) => (
      <>
        {toDateTime(row.start_at)} <br />
        {toDateTime(row.end_at)}
      </>
    ),
  },
  {
    title: '啟用狀態',
    width: 120,
    render: (_, row) => {
      if (row.is_active) {
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>關閉</ColorText>
    },
  },
  // {
  //   title: '期間狀態',
  //   dataIndex: 'status',
  //   width: 120,
  //   render: (_, row) => {
  //     if (row.is_active) {
  //       return <ColorText green>進行中</ColorText>
  //     }
  //     return <ColorText red>關閉</ColorText>
  //   },
  // },
  {
    title: '更新人員/時間',
    width: 200,
    render: (_, row) => (
      <>
        {row.editor} <br />
        {toDateTime(row.updated_at)}
      </>
    ),
  },
  {
    title: '操作',
    render(_, row) {
      const history = useHistory()
      const { getFormData, onDelete } = useAPIService()
      return (
        <Space size="small">
          {/* <PopupConfirm title="請確認是否要停用?">
            <IconLink icon={<CloseCircleOutlined />} label="停用" color="red" />
          </PopupConfirm> */}
          <IconLink
            icon={<EditOutlined />}
            label="編輯"
            onClick={() => history.push(`/promote/edit/${row.id}`)}
          />
          <IconLink
            icon={<CopyOutlined />}
            label="複製"
            onClick={() => history.push(`/promote/edit/${row.id}?copy=1`)}
          />
          <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 120,
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = data.findIndex((x) => x.id === restProps['data-row-key'])
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
  const DraggableContainer = (props) => (
    <SortableWrapper
      useDragHandle
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  )
  return (
    <TableSets
      columns={columns}
      data={data}
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
