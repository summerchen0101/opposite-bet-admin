import DeleteConfirmTip from '@/components/DeleteConfirmTip'
import IconLink from '@/components/IconLink'
import { SelectModifyPopover } from '@/components/ModifyPopover'
import TableSets from '@/components/TableSets'
import { DeleteOutlined, FilterFilled, EditFilled } from '@ant-design/icons'
import { Button, Checkbox, Popover, Space } from 'antd'
import React from 'react'
import Text from '@/components/Text'

const columns = [
  {
    title: '分類',
    dataIndex: 'category',
    allowFiltered: true,
    width: 100,
    render(value, row) {
      const options = [
        { label: '全場反波膽', value: 'full' },
        { label: '上半場反波膽', value: 'firstHalf' },
      ]
      return (
        <Popover
          content={<SelectModifyPopover options={options} value={value} />}
          trigger="click"
        >
          <a>{value}</a>
        </Popover>
      )
    },
  },
  {
    title: '類別',
    dataIndex: 'type',
    allowFiltered: true,
    width: 100,
  },
  {
    title: '語系',
    dataIndex: 'language',
    allowFiltered: true,
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
        <Popover
          content={
            <SelectModifyPopover options={selectOptions} value={value} />
          }
          trigger="click"
        >
          <a>{options[value]}</a>
        </Popover>
      )
    },
  },
  {
    title: '狀態',
    dataIndex: 'status',
    allowFiltered: true,
    width: 80,
    render: (value) => {
      if (value === 'on') return <span style={{ color: 'green' }}>啟用</span>
      else return <span style={{ color: 'red' }}>停用</span>
    },
  },
  {
    title: '更新人員',
    dataIndex: 'operator',
    allowFiltered: true,
    width: 100,
  },
  {
    title: '更新時間',
    dataIndex: 'operatorAt',
    allowFiltered: true,
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
          style={{ float: 'right', marginTop: 4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render: (text, record) => {
      return (
        <>
          <Checkbox defaultChecked={false} />
          <Space size="small" style={{ float: 'right' }}>
            <IconLink icon={<EditFilled />} />
            <DeleteConfirmTip>
              <IconLink icon={<DeleteOutlined />} />
            </DeleteConfirmTip>
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
    key: i,
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
