import { IconLink, TableSets, Text } from '@/components'
import { LevelCode } from '@/lib/enums'
import { getFakeID } from '@/utils/helper'
import { filterColumns, getLevelName, toDateTime } from '@/utils/transfer'
import {
  EditFilled,
  FilterFilled,
  LockOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import qs from 'qs'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import { usePopupProvider } from '../context/PopupProvider'
import TableTitle from './TableTitle'
interface TableItem {
  id: string
  key?: string | number
  bank: { code: string; name: string }
  updatedAt: number
  updatedBy: string
  status: boolean
}

const data: TableItem[] = [...Array(50)].map((t, i) => ({
  id: getFakeID(),
  bank: { code: '012', name: '台北富邦銀行' },
  updatedAt: Date.now(),
  updatedBy: 'summer',
  status: true,
}))
const TableData: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const location = useLocation()

  const orgInfoColumns = [
    {
      title: getLevelName(LevelCode.Vendor),
      key: 'vendor',
      render: (_, row) => 'wwa[明]',
    },
    {
      title: getLevelName(currentLevel),
      render: (_, row) => 'wwa98[陳]',
    },
    {
      title: '下層',
      key: 'childs',
      render: (_, row) => {
        const query = qs.stringify(
          {
            parent: currentLevel,
          },
          { addQueryPrefix: true },
        )
        return <Link to={`${location.pathname}${query}`}>3</Link>
      },
    },
    {
      title: '子帳號',
      render: (_, row) => <a>5</a>,
    },
  ]

  const columns: ColumnsType<TableItem> = [
    {
      title: '組織資訊',
      children:
        currentLevel === LevelCode.Vendor
          ? filterColumns(orgInfoColumns, ['vendor'])
          : orgInfoColumns,
    },
    {
      title: '狀態',
      children: [
        {
          title: '啟/停用',
          render: (_, row) => <Text color="success"> 啟用</Text>,
        },
        {
          title: '白名單',
          render: (_, row) => <a>3</a>,
        },
      ],
    },
    {
      title: '會員資訊',
      children: [
        {
          title: '未結帳注額',
          render: (_, row) => 0,
        },
        {
          title: '已下注',
          render: (_, row) => 0,
        },
        {
          title: '人數',
          render: (_, row) => 0,
        },
        {
          title: '餘額',
          render: (_, row) => 0,
        },
      ],
    },
    {
      title: '登入資訊',
      children: [
        {
          title: '失敗次數',
          render: (_, row) => 0,
        },
        {
          title: '註冊/最後登入',
          render: (_, row) => (
            <>
              註冊：2020-09-16 14:25:42 <br />
              登入：2020-09-16 14:25:42
              <br />
              登入IP：149.222.22.111
            </>
          ),
          width: 230,
        },
      ],
    },
    {
      title: '更新人員/時間',
      render: (_, row) => (
        <>
          {row.updatedBy} <br />
          {toDateTime(row.updatedAt)}
        </>
      ),
      width: 200,
    },
    {
      title: () => <IconLink icon={<FilterFilled />} />,
      fixed: ('right' as unknown) as boolean,
      width: 120,
      render: (_, row) => {
        const [pwFormVisible, setPwFormVisible] = usePopupProvider('pwForm')
        return (
          <Space>
            <IconLink icon={<PlusCircleOutlined />} label="新增下線" />
            <IconLink icon={<EditFilled />} label="編輯" />
            {currentLevel !== LevelCode.Vendor && (
              <IconLink icon={<PieChartOutlined />} label="佔成" />
            )}
            <IconLink
              icon={<LockOutlined />}
              label="修改密碼"
              onClick={() => setPwFormVisible(true)}
            />
            {currentLevel === LevelCode.Agent && (
              <IconLink icon={<ShareAltOutlined />} label="推廣連結" />
            )}
          </Space>
        )
      },
    },
  ]
  return (
    <>
      <TableTitle />
      <TableSets columns={columns} data={data} scroll={{ x: 1800 }} />
    </>
  )
}

export default TableData
