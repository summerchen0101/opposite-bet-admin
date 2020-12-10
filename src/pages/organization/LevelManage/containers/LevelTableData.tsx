import { IconLink, TableSets, Text } from '@/components'
import { LevelCode } from '@/lib/enums'
import { getFakeID } from '@/utils/helper'
import {
  filterColumns,
  getLevelCode,
  getLevelName,
  toDateTime,
} from '@/utils/transfer'
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
import { Link, useHistory, useLocation } from 'react-router-dom'
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
const LevelTableData: React.FC = () => {
  const { currentLevel, alias } = useLevelProvider()
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
      key: 'alias',
      render: (_, row) => {
        return (
          <Link
            to={`${location.pathname}${qs.stringify(
              {
                alias: 'gogo123',
                parent: getLevelCode(currentLevel, -1),
              },
              { addQueryPrefix: true },
            )}`}
          >
            5
          </Link>
        )
      },
    },
  ]

  const getOrgInfoColumns = () => {
    if (currentLevel === LevelCode.Vendor) {
      return filterColumns(orgInfoColumns, ['vendor'])
    } else if (alias) {
      return filterColumns(orgInfoColumns, ['vendor', 'alias', 'childs'])
    }
    return orgInfoColumns
  }

  const columns: ColumnsType<TableItem> = [
    {
      title: '組織資訊',
      children: getOrgInfoColumns(),
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
          render: (_, row) => {
            const [visible, setVisible] = usePopupProvider('whiteList')
            return <a onClick={() => setVisible(true)}>3</a>
          },
        },
      ],
    },
    {
      title: '會員資訊',
      children: [
        {
          title: '未結帳注額',
          render: (_, row) => {
            const [visible, setVisible] = usePopupProvider('tradeHistory')
            return <a onClick={() => setVisible(true)}>2</a>
          },
        },
        {
          title: '已下注',
          render: (_, row) => {
            const [visible, setVisible] = usePopupProvider('tradeHistory')
            return <a onClick={() => setVisible(true)}>2</a>
          },
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
        const [invitedFormVisible, setInvitedFormVisible] = usePopupProvider(
          'invitedForm',
        )
        return (
          <Space>
            {!alias && (
              <IconLink icon={<PlusCircleOutlined />} label="新增下線" />
            )}
            <IconLink icon={<EditFilled />} label="編輯" />
            {currentLevel !== LevelCode.Vendor && !alias && (
              <IconLink icon={<PieChartOutlined />} label="佔成" />
            )}
            <IconLink
              icon={<LockOutlined />}
              label="修改密碼"
              onClick={() => setPwFormVisible(true)}
            />
            {currentLevel === LevelCode.Agent && (
              <IconLink
                icon={<ShareAltOutlined />}
                label="推廣連結"
                onClick={() => setInvitedFormVisible(true)}
              />
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

export default LevelTableData
