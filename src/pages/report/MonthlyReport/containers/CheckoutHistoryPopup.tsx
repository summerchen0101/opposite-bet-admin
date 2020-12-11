import { PopupModal } from '@/components'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const CheckoutHistoryPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('checkoutHistory')
  const columns = [
    { title: '建立時間', render: (_, row) => '-' },
    { title: '結算來源', render: (_, row) => '-' },
    { title: '結算額度', render: (_, row) => '-' },
    { title: '交收額度', render: (_, row) => '-' },
    { title: 'IP', render: (_, row) => '-', width: 120 },
    { title: '創建人', render: (_, row) => '-' },
    { title: '剩餘時間', render: (_, row) => '-' },
  ]
  const data = [...Array(5)]
  return (
    <PopupModal
      visible={visible}
      title="结算记录"
      onCancel={() => setVisible(false)}
      width={900}
      footer={false}
    >
      <Table
        columns={addKeyToArrayItem(columns)}
        dataSource={addKeyToArrayItem(data)}
        size="small"
        bordered
      />
    </PopupModal>
  )
}

export default CheckoutHistoryPopup
