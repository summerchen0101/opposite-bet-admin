import { PopupModal, Text } from '@/components'
import { addKeyToArrayItem, toDateTime } from '@/utils/transfer'
import { Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'
const GameOrdersPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('gameOrders')

  const columns = [
    { title: '投注時間', render: (_, row) => toDateTime(Date.now()) },
    { title: '注單號碼', render: (_, row) => 12422 },
    { title: '帳號/名稱', render: (_, row) => 'gogo[陳]' },
    { title: '注額', render: (_, row) => '1,000.00' },
    { title: '狀態', render: (_, row) => '已過帳' },
    {
      title: '輸贏結果',
      render: (_, row) => <Text color="success">+200</Text>,
    },
    { title: '返水', render: (_, row) => '-' },
    { title: '會員結果', render: (_, row) => '-' },
  ]

  const data = [...Array(5)]

  return (
    <PopupModal
      visible={visible}
      title="全場波膽- 1 - 0 注單明細"
      onCancel={() => setVisible(false)}
      footer={false}
      width={800}
    >
      <div className="mb-2">
        <span className="mr-1">賽事編號：3381</span>
        <span className="mr-1">比賽時間：2020-11-18 00:01:51</span>
        <span className="mr-1">帳務日期：2020-11-18</span>
        <br />
        <span className="mr-1">聯盟：球友會友誼</span>
        <span className="mr-1">對陣：韋斯咸(主) vs 阿斯頓維拉</span>
      </div>
      <Table
        columns={addKeyToArrayItem(columns)}
        dataSource={addKeyToArrayItem(data)}
        size="small"
        bordered
      />
    </PopupModal>
  )
}

export default GameOrdersPopup
