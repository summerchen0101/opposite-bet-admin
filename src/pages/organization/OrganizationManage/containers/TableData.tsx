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

const columns = [
  {
    title: '組織資訊',
    dataIndex: 'account',
    allowFiltered: true,
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
    allowFiltered: true,
    width: 140,
    children: [
      {
        title: '可用餘額',
        dataIndex: 'firstWithdrawalCount',
        allowFiltered: true,
        width: 120,
        render: () => 0,
      },
      {
        title: '結算金',
        dataIndex: 'firstWithdrawalTotal',
        allowFiltered: true,
        width: 140,
        render: () => 0,
      },
    ],
  },

  {
    title: '狀態',
    dataIndex: 'onceAgainWithdrawalCount',
    allowFiltered: true,
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
        render: () => <a>0</a>,
      },
    ],
  },

  {
    title: '會員資訊',
    dataIndex: 'withdrawalTotal',
    allowFiltered: true,
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
    allowFiltered: true,
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
        title: () => (
          <>
            註冊
            <br />
            最後登入
          </>
        ),
        dataIndex: 'registerCount',
        allowFiltered: true,
        width: '230px',
        render: () => (
          <>
            註冊：2020-09-16 14:25:42 <br />
            登入：2020-09-16 14:25:42 <br />
            登入IP：
            <Popover
              content={
                <>
                  裝置：desktop <br />
                  系統：windows <br />
                  瀏覽器：chrome
                </>
              }
            >
              <a>149.222.22.111</a>
            </Popover>
          </>
        ),
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
    allowFiltered: true,
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
      return (
        <Space size="small">
          <IconLink icon={<PlusCircleOutlined />} label="新增" />
          <IconLink icon={<EditFilled />} label="編輯" />
          <IconLink icon={<PieChartOutlined />} label="佔成" />
          <IconLink icon={<LockOutlined />} label="修改密碼" />
        </Space>
      )
    },
    width: '110px',
  },
]

const data = []
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
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
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
