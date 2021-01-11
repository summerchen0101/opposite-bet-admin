import { ColorText, IconLink, TableSets } from '@/components'
import {
  EditFilled,
  ShareAltOutlined,
  HistoryOutlined,
  PieChartOutlined,
  DollarOutlined,
  LockOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Link } from 'react-router-dom'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import { MemberManage, AgentManage } from '../../routes'
import LevelTree from './LevelTree'

const columns: ColumnsType<BlackIp> = [
  {
    title: '上層',
    width: 120,
    render: (_, row) => 'kathy[凱西]',
  },
  {
    title: '帳號/名稱',
    width: 120,
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('detail')
      return <a onClick={() => setVisible(true)}>apple[頻果]</a>
    },
  },
  {
    title: '標籤',
    width: 120,
    render: (_, row) => '危險客戶、同IP',
  },
  {
    title: '允許登入',
    width: 80,
    render: (_, row) => '是',
  },
  {
    title: '允許投注',
    width: 80,
    render: (_, row) => '是',
  },
  {
    title: '可用餘額',
    width: 100,
    render: (_, row) => '0.00',
  },
  {
    title: '狀態',
    width: 100,
    render: (_, row) => <ColorText green>啟用</ColorText>,
  },
  {
    title: '登入失敗',
    width: 100,
    render: (_, row) => 0,
  },
  {
    title: '註冊時間',
    width: 200,
    render: (_, row) => '2020-09-16 14:25:42',
  },
  {
    title: '登入時間',
    render: (_, row) => {
      return (
        <>
          2020-09-16 14:25:42
          <br />
          <a>149.222.22.111</a>
        </>
      )
    },
    width: 200,
  },
  {
    title: '更新人員/時間',
    render: (_, row) => (
      <>
        summer <br />
        2020-09-16 14:25:42
      </>
    ),
    width: 200,
  },
  {
    title: '操作',
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const [, setInvitedVisible] = usePopupProvider('invitedForm')
      const [, setPointVisible] = usePopupProvider('manualPoint')
      const [, setDepositVisible] = usePopupProvider('depositHistory')
      const [, setPwFormVisible] = usePopupProvider('pwForm')
      const [, setPercentVisible] = usePopupProvider('percentCreate')
      const { getFormData } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<ShareAltOutlined />}
            label="分享連結"
            onClick={() => setInvitedVisible(true)}
          />
          <IconLink
            icon={<PieChartOutlined />}
            label="佔成"
            onClick={() => setPercentVisible(true)}
          />
          <IconLink
            icon={<EditFilled />}
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
          <IconLink
            icon={<DollarOutlined />}
            label="人工加減碼"
            onClick={() => setPointVisible(true)}
          />
          <IconLink
            icon={<HistoryOutlined />}
            label="金流紀錄"
            onClick={() => setDepositVisible(true)}
          />
          <IconLink
            icon={<LockOutlined />}
            label="修改密碼"
            onClick={() => setPwFormVisible(true)}
          />
        </Space>
      )
    },
    width: 100,
  },
]

const TableData: React.FC = () => {
  // const data = useTypedSelector(selectTableData)
  const data = [{ id: 1 }]
  return (
    <>
      <LevelTree />
      <TableSets columns={columns} data={data} scroll={{ x: 1600 }} />
    </>
  )
}

export default TableData
