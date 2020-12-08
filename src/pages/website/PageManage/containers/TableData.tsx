import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'
import { useDispatch } from 'react-redux'
import { toggleEditModal } from '../reducer'

const columns = [
  {
    title: '名稱',
    dataIndex: 'name',
    width: 120,
    render: (_, row) => '關於我們',
  },
  {
    title: '語系',
    width: 100,
    render: (_, row) => '簡中',
  },
  {
    title: '類型',
    width: 100,
    render: (_, row) => 'HTML',
  },
  {
    title: '狀態',
    width: 100,
    render: (_, row) => <Text color="success">啟用</Text>,
  },
  {
    title: '更新人員',
    width: 100,
    render: (_, row) => 'flora',
  },
  {
    title: '更新時間',
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
      const dispatch = useDispatch()
      const handleEdit = () => dispatch(toggleEditModal(true))
      return (
        <Space size="small">
          <IconLink icon={<EditFilled />} label="編輯" onClick={handleEdit} />
          <PopupConfirm>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 80,
  },
]

const data = [...Array(50)].map((t, i) => ({
  id: i,
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
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
