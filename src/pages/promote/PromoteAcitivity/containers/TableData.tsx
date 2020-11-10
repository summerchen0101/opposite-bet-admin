import DeleteConfirmTip from '@/components/DeleteConfirmTip'
import IconLink from '@/components/IconLink'
import { SelectModifyPopover } from '@/components/ModifyPopover'
import TableSets from '@/components/TableSets'
import {
  StopOutlined,
  FilterFilled,
  EditFilled,
  CopyOutlined,
  EyeFilled,
} from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'
import { MenuOutlined } from '@ant-design/icons'
import arrayMove from 'array-move'

import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
import styled from 'styled-components'
const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
))

const columns = [
  {
    title: '排序',
    dataIndex: 'account',
    allowFiltered: true,
    width: 100,
    render: () => <DragHandle />,
  },
  {
    title: '優惠名稱',
    dataIndex: 'firstDepositCount',
    allowFiltered: true,
    width: 120,
    render: () => <a>搶搶註冊送</a>,
  },
  {
    title: '優惠期限',
    dataIndex: 'firstDepositTotal',
    allowFiltered: true,
    width: '180px',
    render: () => (
      <>
        2020-10-02 00:00:00 ~ <br />
        2020-10-31 23:59:59
      </>
    ),
  },
  {
    title: '狀態',
    dataIndex: 'status',
    allowFiltered: true,
    width: 120,
    render: (_, row) => <Text color="success">進行中</Text>,
  },
  {
    title: '更新人員',
    dataIndex: 'firstWithdrawalCount',
    allowFiltered: true,
    width: 120,
    render: () => 'flora',
  },
  {
    title: '更新時間',
    dataIndex: 'depositTotal',
    allowFiltered: true,
    width: 200,
    render: (_, row) => '2019-07-01 10:54:36',
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
          <IconLink icon={<StopOutlined />} label="停用" />
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink icon={<CopyOutlined />} label="複製" />
          <IconLink icon={<EyeFilled />} label="開放" />
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
    account: 'aaaa(小白)',
    firstDepositCount: 5,
    firstDepositTotal: 20320,
    onceAgainDepositCount: 10,
    onceAgainDepositTotal: 41232,
    firstWithdrawalCount: 5,
    firstWithdrawalTotal: 20320,
    onceAgainWithdrawalCount: 10,
    onceAgainWithdrawalTotal: 41232,
    loginCount: 20,
    registerCount: 3,
  })
}

const SortableItem = SortableElement((props) => <tr {...props} />)
const SortableWrapper = SortableContainer((props) => <tbody {...props} />)

const DraggableContainer = (props) => (
  <SortableWrapper useDragHandle helperClass="row-dragging" {...props} />
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
      onSortEnd={onSortEnd}
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
