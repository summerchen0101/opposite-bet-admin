import { PopupModal } from '@/components'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'
const GameDetailPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('gameDetail')
  const [gameOrdersVisible, setGameOrdersVisible] = usePopupProvider(
    'gameOrders',
  )

  const eventTypes = [
    { label: '主', count: 8 },
    { label: '和', count: 4 },
    { label: '客', count: 8 },
  ]

  const columns = eventTypes.map((t, i) => {
    const data = [...Array(t.count)]
    return {
      title: <div className="text-center">{t.label}</div>,
      render: (_, row) => (
        <>
          {data.map((d, i) => (
            <Space key={i} className="mb-1 w-100 justify-content-between">
              <span className="text-nowrap">1-0</span>
              <span>7.5</span>
              <span>
                <a onClick={() => setGameOrdersVisible(true)}>200</a> / 32,120
              </span>
            </Space>
          ))}
        </>
      ),
      className: 'align-top',
      width: 100,
    }
  })

  const data = [{ key: 1 }]

  return (
    <PopupModal
      visible={visible}
      title="全場波膽(3381)"
      onCancel={() => setVisible(false)}
      footer={false}
      width={600}
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
        pagination={false}
      />
    </PopupModal>
  )
}

export default GameDetailPopup
