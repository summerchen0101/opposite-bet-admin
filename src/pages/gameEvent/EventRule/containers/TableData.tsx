import PopupConfirm from '@/components/PopupConfirm'
import IconLink from '@/components/IconLink'
import { PopoverEditor } from '@/components'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'
import { useDispatch } from 'react-redux'
import { toggleUpdateModal } from '../reducer'

const columns = [
  {
    title: '分類',
    dataIndex: 'category',
    width: 100,
    render(value, row) {
      const options = [
        { label: '全場反波膽', value: 'full' },
        { label: '上半場反波膽', value: 'firstHalf' },
      ]
      return (
        <PopoverEditor options={options} value={value}>
          <a className="link">{value}</a>
        </PopoverEditor>
      )
    },
  },
  {
    title: '類別',
    dataIndex: 'type',
    width: 100,
  },
  {
    title: '語系',
    dataIndex: 'language',
    width: 80,
    render(value, row) {
      const options = {
        cn: '簡中',
        en: 'English',
      }
      const selectOptions = Object.keys(options).map((key) => ({
        label: options[key],
        value: key,
      }))
      return (
        <PopoverEditor value={value} options={selectOptions}>
          {value}
        </PopoverEditor>
      )
    },
  },
  {
    title: '狀態',
    dataIndex: 'status',
    width: 80,
    render: (value) => {
      if (value === 'on') return <span style={{ color: 'green' }}>啟用</span>
      else return <span style={{ color: 'red' }}>停用</span>
    },
  },
  {
    title: '更新人員',
    dataIndex: 'operator',
    width: 100,
  },
  {
    title: '更新時間',
    dataIndex: 'operatorAt',
    width: 150,
  },
  {
    title: () => (
      <>
        <Space size="small">
          <Checkbox defaultChecked={false} />
          操作(0)
        </Space>
        <IconLink
          icon={<FilterFilled />}
          style={{ float: 'right', marginBottom: -4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render: (text, record) => {
      const dispatch = useDispatch()
      const handleEditClicked = () => dispatch(toggleUpdateModal(true))
      return (
        <>
          <Checkbox defaultChecked={false} />
          <Space size="small" style={{ float: 'right' }}>
            <IconLink icon={<EditFilled />} onClick={handleEditClicked} />
            <PopupConfirm>
              <IconLink icon={<DeleteOutlined />} />
            </PopupConfirm>
          </Space>
        </>
      )
    },
    width: 80,
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    id: i,
    category: '全場反波膽',
    type: '會員',
    language: 'cn',
    status: 'on',
    operator: 'flora',
    operatorAt: '2019-07-01 10:54:36',
  })
}
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
