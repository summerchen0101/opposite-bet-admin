import { ColorText, PopupConfirm, Text } from '@/components'
import DragHandler, {
  SortableItem,
  SortableWrapper,
} from '@/components/DragHandler'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { toDateTime } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Menu } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { setEditId } from '../reducer'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'
import arrayMove from 'array-move'

const columns: ColumnsType<Menu> = [
  {
    width: 60,
  },
  // {
  //   title: '排序',
  //   width: 80,
  //   render: (_, row) => <DragHandler />,
  //   className: 'drag-visible',
  // },
  {
    title: '名稱',
    width: 180,
    render: (_, row) => row.name,
    className: 'drag-visible',
  },
  {
    title: '路徑',
    width: 180,
    render: (_, row) => row.path,
  },
  {
    title: '圖示',
    width: 150,
    render: (_, row) => row.icon,
  },
  {
    title: '創建時間',
    width: 180,
    render: (_, row) => toDateTime(row.created_at),
  },
  {
    title: '狀態',
    width: 80,
    render: (_, row) => {
      if (row.is_active) {
        return <ColorText green>啟用</ColorText>
      }
      return <ColorText red>停用</ColorText>
    },
  },
  {
    title: '更新時間',
    width: 200,
    render: (_, row) => toDateTime(row.updated_at),
  },
  {
    title: '操作',
    fixed: ('right' as unknown) as boolean,
    render(_, row) {
      const setCreateVisible = usePopupProvider('createForm')[1]
      const setEditVisible = usePopupProvider('editForm')[1]
      const dispatch = useDispatch()
      const {
        getFormData,
        getOptions,
        onDelete,
        changeActive,
      } = useAPIService()
      const handleEdit = async () => {
        await Promise.all([getOptions(), getFormData(row.id)])
        setEditVisible(true)
      }
      const handleCreate = async (id: number) => {
        dispatch(setEditId(id))
        await getOptions()
        setCreateVisible(true)
      }
      return (
        <Space size="small">
          {row.is_active ? (
            <IconLink
              icon={<CloseCircleOutlined />}
              label="停用"
              color="red"
              onClick={() => changeActive(row.id, false)}
            />
          ) : (
            <IconLink
              icon={<CheckCircleOutlined />}
              label="啟用"
              color="green"
              onClick={() => changeActive(row.id, true)}
            />
          )}
          <IconLink icon={<EditOutlined />} label="編輯" onClick={handleEdit} />
          {!row.parent_id && (
            <IconLink
              icon={<PlusCircleOutlined />}
              label="新增下層選單"
              onClick={() => handleCreate(row.id)}
            />
          )}
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

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = data.findIndex((x) => x.id === restProps['data-row-key'])
    return <SortableItem index={index} {...restProps} />
  }
  return (
    <TableSets<Menu>
      columns={columns}
      data={data.map((m) => ({
        ...m,
        children: m.children.length > 0 ? m.children : undefined,
      }))}
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
