import { usePopup } from '@/contexts/PopupContextProvider'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Modal, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
interface TableItem {
  name: string
  betMax: number
  gameMax: number
}
const columns: ColumnsType<TableItem> = [
  {
    title: '玩法',
    render: (_, row) => row.name,
    width: 100,
  },
  {
    title: '單注上限(萬)',
    render: (_, row) => row.betMax,
    width: 100,
  },
  {
    title: '單場上限(萬)',
    render: (_, row) => row.gameMax,
    width: 100,
  },
]

const data: TableItem[] = [{ name: '反波膽', betMax: 100, gameMax: 1000 }]

const BettingLimitPopup: React.FC = () => {
  const { visible, setVisible } = usePopup('bettingLimit')
  return (
    <Modal
      title="個人限額"
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
      width="400px"
    >
      <Table
        columns={addKeyToArrayItem(columns)}
        dataSource={addKeyToArrayItem(data)}
        pagination={false}
        bordered
        size="small"
      />
    </Modal>
  )
}

export default BettingLimitPopup
