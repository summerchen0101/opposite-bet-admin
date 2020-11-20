import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import Text from '@/components/Text'
import { FilterFilled } from '@ant-design/icons'
import { Popover, Space } from 'antd'
import React from 'react'
import {
  PlusCircleOutlined,
  EditFilled,
  PieChartOutlined,
  LockOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
  toggleLoginHistoryModal,
  togglePercentageModal,
  toggleTradeHistoryModal,
  toggleWhiteListModal,
} from '../reducer'
import { useTypedSelector, selectTableData } from '../selectors'

const columns = [
  {
    title: '組織資訊',
    dataIndex: 'account',
    width: 100,
    children: [
      {
        title: '加盟商',
        dataIndex: 'firstDepositCount',
        allowFiltered: true,
        width: 120,
        render: () => 'cntd01',
      },
      {
        title: '帳號/名稱',
        dataIndex: 'firstDepositTotal',
        allowFiltered: true,
        width: 140,
        render: () => <a>cntd01 [陳]</a>,
      },
      {
        title: '角色',
        dataIndex: 'onceAgainDepositCount',
        allowFiltered: true,
        width: 120,
        render: () => '加盟-虚层(预设)',
      },
      {
        title: '上層',
        dataIndex: 'onceAgainDepositTotal',
        allowFiltered: true,
        width: '180px',
        render: () => <a>new01 【STG加盟主】</a>,
      },
      {
        title: '下層',
        dataIndex: 'onceAgainDepositTotal',
        allowFiltered: true,
        width: '100px',
        render: () => <a>3</a>,
      },
      {
        title: '子帳號',
        dataIndex: 'depositCount',
        allowFiltered: true,
        width: '100px',
        render: () => <a>5</a>,
      },
    ],
  },

  {
    title: '錢包',
    dataIndex: 'depositTotal',
    width: 140,
    children: [
      {
        title: '可用餘額',
        dataIndex: 'firstWithdrawalCount',
        allowFiltered: true,
        width: 120,
        render: () => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleTradeHistoryModal(true))
          return <a onClick={onClick}>0</a>
        },
      },
      {
        title: '結算金',
        dataIndex: 'firstWithdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleTradeHistoryModal(true))
          return <a onClick={onClick}>100</a>
        },
      },
    ],
  },

  {
    title: '狀態',
    dataIndex: 'onceAgainWithdrawalCount',
    width: 120,
    children: [
      {
        title: '啟/停用',
        dataIndex: 'onceAgainWithdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => <Text color="success">啟用</Text>,
      },
      {
        title: '白名單',
        dataIndex: 'withdrawalCount',
        allowFiltered: true,
        width: 120,
        render: () => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleWhiteListModal(true))
          return <a onClick={onClick}>10</a>
        },
      },
    ],
  },

  {
    title: '會員資訊',
    dataIndex: 'withdrawalTotal',
    width: 140,
    children: [
      {
        title: '人數',
        dataIndex: 'loginCount',
        allowFiltered: true,
        width: 120,
        render: () => 3,
      },
      {
        title: '餘額',
        dataIndex: 'registerCount',
        allowFiltered: true,
        width: 120,
        render: () => '10,225.60',
      },
    ],
  },
  {
    title: '登入資訊',
    dataIndex: 'withdrawalTotal',
    width: 140,
    children: [
      {
        title: '失敗次數',
        dataIndex: 'loginCount',
        allowFiltered: true,
        width: 120,
        render: () => 0,
      },
      {
        title: '註冊 / 最後登入',
        dataIndex: 'registerCount',
        allowFiltered: true,
        width: '230px',
        render: () => {
          const dispatch = useDispatch()
          const onClick = () => dispatch(toggleLoginHistoryModal(true))
          return (
            <>
              註冊：2020-09-16 14:25:42 <br />
              登入：2020-09-16 14:25:42 <br />
              登入IP： <a onClick={onClick}>149.222.22.111</a>
            </>
          )
        },
      },
    ],
  },

  {
    title: () => (
      <>
        更新人員
        <br />
        更新時間
      </>
    ),
    dataIndex: 'registerCount',
    width: '180px',
    render: () => (
      <>
        summer
        <br />
        2020-12-12 10:49
      </>
    ),
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
      const handlePercentageClicked = () =>
        dispatch(togglePercentageModal(true))
      return (
        <Space size="small">
          <IconLink icon={<PlusCircleOutlined />} label="新增" />
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink
            icon={<PieChartOutlined />}
            label="佔成"
            onClick={handlePercentageClicked}
          />
          <IconLink icon={<LockOutlined />} label="修改密碼" />
        </Space>
      )
    },
    width: '110px',
  },
]

const TableData: React.FC = () => {
  const data = useTypedSelector(selectTableData)
  return <TableSets columns={columns} data={data} />
}

export default TableData
