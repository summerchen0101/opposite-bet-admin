import IconLink from '@/components/IconLink'
import PopupConfirm from '@/components/PopupConfirm'
import TableSets from '@/components/TableSets'
import Text from '@/components/Text'
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
