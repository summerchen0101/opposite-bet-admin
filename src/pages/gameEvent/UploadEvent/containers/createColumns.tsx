import { PopoverEditor } from '@/components'
import IconLink from '@/components/IconLink'
import PopupConfirm from '@/components/PopupConfirm'
import TableHeaderController from '@/containers/TableHeaderController'
import {
  useTableSelect,
  useTableSelectAll,
} from '@/utils/hooks/usetTableSelector'
import { DeleteOutlined, FilterFilled } from '@ant-design/icons'
import { Checkbox, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { TableItem } from '../types'

export const createColumns = (data: TableItem[]): ColumnsType<TableItem> => {
  return [
    {
      title: '賽事編號',
      dataIndex: 'eventId',
      width: '10%',
    },
    {
      title: '開賽時間',
      dataIndex: 'startAt',
    },
    {
      title: '隊名',
      dataIndex: 'teams',
      render(teams) {
        if (!teams) return '-'
        return (
          <>
            <span>{teams[0]}</span>
            <br />
            <span>{teams[1]}</span>
          </>
        )
      },
    },
    {
      title: '聯盟',
      dataIndex: 'league',
      render(value, row) {
        return (
          <PopoverEditor value={value}>
            <a>{value}</a>
          </PopoverEditor>
        )
      },
    },
    {
      title: '國家',
      dataIndex: 'country',
      render(value, row) {
        const options = [
          { label: '巴西', value: 'opt1' },
          { label: '美國', value: 'opt2' },
        ]
        return (
          <PopoverEditor value={value} options={options}>
            <a>{value}</a>
          </PopoverEditor>
        )
      },
    },
    {
      title: '上架狀態',
      dataIndex: 'status',
      render(value, row) {
        return (
          <PopoverEditor value={value}>
            <a>{value}</a>
          </PopoverEditor>
        )
      },
    },
    {
      title: '採集時間',
      dataIndex: 'collectingTime',
    },
    {
      title: <TableHeaderController data={data} />,
      key: 'control',
      fixed: ('right' as unknown) as boolean,
      render: (_, row) => {
        const { isSelected, handleSelect } = useTableSelect(row.id)
        return (
          <>
            <Checkbox
              checked={isSelected}
              onChange={(e) => handleSelect(e.target.checked)}
            />
            <Space size="small" style={{ float: 'right' }}>
              <PopupConfirm>
                <IconLink icon={<DeleteOutlined />} />
              </PopupConfirm>
            </Space>
          </>
        )
      },
      width: 120,
    },
  ]
}
