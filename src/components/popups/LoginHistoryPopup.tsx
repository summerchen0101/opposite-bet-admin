import { usePopup } from '@/contexts/PopupContextProvider'
import { addKeyToArrayItem, toDateTime } from '@/utils/transfer'
import { Modal, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
interface TableItem {
  ip: string
  status: number
  errMsg: string
  loginAt: number
}
const columns: ColumnsType<TableItem> = [
  {
    title: 'IP',
    render: (_, row) => row.ip,
    width: 100,
  },
  {
    title: '狀態',
    render: (_, row) => (row.status == 1 ? '成功' : '失敗'),
    width: 80,
  },
  {
    title: '錯誤訊息',
    render: (_, row) => row.errMsg,
    width: 200,
  },
  {
    title: '登入時間',
    render: (_, row) => toDateTime(row.loginAt),
    width: 160,
  },
]

const data: TableItem[] = [...Array(5)].map((t, i) => ({
  ip: '0.0.0.0',
  status: 1,
  errMsg: '-',
  loginAt: Date.now() / 1000,
}))

const LoginHistoryPopup: React.FC = () => {
  const { visible, setVisible } = usePopup('loginHistory')
  return (
    <Modal
      title="登入歷程"
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
      width="700px"
    >
      <Table
        columns={addKeyToArrayItem(columns)}
        dataSource={addKeyToArrayItem(data)}
        bordered
        size="small"
      />
    </Modal>
  )
}

export default LoginHistoryPopup
