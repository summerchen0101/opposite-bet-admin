import { ColorText, IconLink, TableSets } from '@/components'
import {
  EditFilled,
  ShareAltOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { BlackIp } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'

const columns: ColumnsType<BlackIp> = [
  {
    title: '總代',
    width: 120,
    render: (_, row) => 'apple[頻果]',
  },
  {
    title: '下層代理',
    width: 120,
    render: (_, row) => <a>3</a>,
  },
  {
    title: '直屬會員',
    width: 120,
    render: (_, row) => <a>3</a>,
  },
  {
    title: '子帳號',
    width: 120,
    render: (_, row) => {
      const [, setVisible] = usePopupProvider('aliasAccount')
      return <a onClick={() => setVisible(true)}>3</a>
    },
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
    title: '體育額度',
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
    title: '建立時間',
    width: 200,
    render: (_, row) => '2020-09-16 14:25:42',
  },
  {
    title: '註冊/最後登入',
    render: (_, row) => {
      return (
        <>
          註冊：2020-09-16 14:25:42 <br />
          登入：2020-09-16 14:25:42
          <br />
          登入IP：<a>149.222.22.111</a>
        </>
      )
    },
    width: 230,
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
            icon={<EditFilled />}
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
          <IconLink
            icon={<PieChartOutlined />}
            label="佔成"
            onClick={() => setPercentVisible(true)}
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
  return <TableSets columns={columns} data={data} scroll={{ x: 1600 }} />
}

export default TableData
