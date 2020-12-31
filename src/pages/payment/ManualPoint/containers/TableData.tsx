import { ColorText, IconLink, TableSets, PopupConfirm } from '@/components'
import { IPBlockTypeOpts, platformTypeOpts, yesNoOpts } from '@/lib/options'
import { toDateTime, toOptionName } from '@/utils/transfer'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CopyOutlined,
  EditFilled,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { selectTableData, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '編號',
    render: (_, row) => '12321',
    width: 100,
  },
  {
    title: '類型',
    render: (_, row) => '12321',
    width: 100,
  },
  {
    title: '項目',
    render: (_, row) => '人工存入',
    width: 100,
  },
  {
    title: '廠商',
    render: (_, row) => 'gog[高]',
    width: 150,
  },
  {
    title: '帳號/名稱',
    render: (_, row) => 'apple[果]',
    width: 150,
  },
  {
    title: '提領金額',
    render: (_, row) => 1000,
    width: 120,
  },
  {
    title: '備註',
    render: (_, row) => '-',
    width: 120,
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-12-12 22:00:22
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    fixed: 'right',
    render(_, row) {
      return (
        <Space size="small">
          <IconLink icon={<CopyOutlined />} label="複製資訊" />
        </Space>
      )
    },
    width: 100,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return <TableSets columns={columns} data={data} scroll={{ x: 1300 }} />
}

export default TableData
