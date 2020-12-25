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
import {
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import { usePopupProvider } from '../context/PopupProvider'
import TableTitle from './TableTitle'
import { LevelManage, LevelManageAliasTable } from '../../routes'
import Popups from './Popups'
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
  const { currentLevel } = useLevelProvider()
  const location = useLocation()
  const { path } = useRouteMatch()
  const orgInfoColumns = [
    {
      title: getLevelName(currentLevel),
      render: (_, row) => 'wwa98[陳]',
    },
    {
      title: '下層',
      key: 'childs',
      render: (_, row) => {
        return (
          <Link to={`${LevelManage.path}/${getLevelCode(currentLevel, 1)}`}>
            3
          </Link>
        )
      },
    },
    {
      title: '子帳號',
      key: 'alias',
      render: (_, row) => {
        return <Link to={`${LevelManage.path}/alias/${currentLevel}`}>5</Link>
      },
    },
  ]

  const getOrgInfoColumns = () => {
    if (currentLevel === LevelCode.Vendor) {
      return filterColumns(orgInfoColumns, ['vendor'])
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
          title: '登入失敗',
          render: (_, row) => 0,
        },
        {
          title: '註冊/最後登入',
          render: (_, row) => {
            const [visible, setVisible] = usePopupProvider('loginHistory')
            return (
              <>
                註冊：2020-09-16 14:25:42 <br />
                登入：2020-09-16 14:25:42
                <br />
                登入IP：<a onClick={() => setVisible(true)}>149.222.22.111</a>
              </>
            )
          },
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
        const [editFormVisible, setEditFormVisible] = usePopupProvider(
          'editForm',
        )
        const [pwFormVisible, setPwFormVisible] = usePopupProvider('pwForm')
        const [percentFormVisible, setPercentFormVisible] = usePopupProvider(
          'percentForm',
        )
        const [invitedFormVisible, setInvitedFormVisible] = usePopupProvider(
          'invitedForm',
        )
        return (
          <Space>
            <IconLink icon={<PlusCircleOutlined />} label="新增下線" />
            <IconLink
              icon={<EditFilled />}
              label="編輯"
              onClick={() => setEditFormVisible(true)}
            />
            {currentLevel !== LevelCode.Vendor && (
              <IconLink
                icon={<PieChartOutlined />}
                label="佔成"
                onClick={() => setPercentFormVisible(true)}
              />
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
      <Popups />
    </>
  )
}

export default LevelTableData
