import { IconLink, TableSets } from '@/components'
import { getFakeID } from '@/utils/helper'
import { toDateTime } from '@/utils/transfer'
import {
  EditOutlined,
  FilterFilled,
  LockOutlined,
  UploadOutlined,
  DownloadOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useLevelProvider } from '../context/LevelProvider'
import TableTitle from './TableTitle'
import numeral from 'numeral'
import { usePopupProvider } from '../context/PopupProvider'
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
const MemberTableData: React.FC = () => {
  const columns: ColumnsType<TableItem> = [
    {
      title: '廠商',
      render: (_, row) => 'abb123[明]',
    },
    {
      title: '會員',
      render: (_, row) => 'happy99[樂樂]',
    },
    {
      title: '用戶類型',
      render: (_, row) => '1級會員',
    },
    {
      title: '標籤',
      render: (_, row) => '危險客戶、同IP',
    },
    {
      title: '允許登入',
      render: (_, row) => '是',
    },
    {
      title: '允許投注',
      render: (_, row) => '是',
    },
    {
      title: '可用餘額',
      render: (_, row) => {
        const [visible, setVisible] = usePopupProvider('tradeHistory')
        return (
          <a onClick={() => setVisible(true)}>
            {numeral(8100).format('0,0.00')}
          </a>
        )
      },
    },
    {
      title: '失敗次數',
      render: (_, row) => 3,
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
        const [_p, setPwFormVisible] = usePopupProvider('pwForm')
        const [_d, setDepositHistoryVisible] = usePopupProvider(
          'depositHistory',
        )
        const [_w, setWithdrawHistoryVisible] = usePopupProvider(
          'withdrawHistory',
        )
        const [_point, setPointFormVisible] = usePopupProvider('pointForm')
        const [_m, setMemberEditVisible] = usePopupProvider('memberEditForm')
        return (
          <Space>
            <IconLink
              icon={<EditOutlined />}
              label="編輯"
              onClick={() => setMemberEditVisible(true)}
            />
            <IconLink
              icon={<DownloadOutlined />}
              label="充值紀錄"
              onClick={() => setDepositHistoryVisible(true)}
            />
            <IconLink
              icon={<UploadOutlined />}
              label="提領紀錄"
              onClick={() => setWithdrawHistoryVisible(true)}
            />
            <IconLink
              icon={<LockOutlined />}
              label="修改密碼"
              onClick={() => setPwFormVisible(true)}
            />
            <IconLink
              icon={<DollarCircleOutlined />}
              label="調節金額"
              onClick={() => setPointFormVisible(true)}
            />
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

export default MemberTableData
