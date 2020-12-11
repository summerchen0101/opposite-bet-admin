import { PopupModal } from '@/components'
import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Button, Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'

const GameListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('gameList')
  const [formVisible, setFormVisible] = usePopupProvider('gameForm')

  const columns = [
    { title: '代碼', render: (_, row) => 'Opposite' },
    { title: '名稱', render: (_, row) => '反波膽' },
    {
      title: '操作',
      render: (_, row) => (
        <Space>
          <IconLink
            icon={<EditOutlined />}
            label="編輯"
            onClick={() => setVisible(true)}
          />
          <PopupConfirm>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      ),
      width: 80,
    },
  ]

  const data = [...Array(5)]

  return (
    <PopupModal
      visible={visible}
      title={
        <>
          玩法列表
          <Space className="float-right mr-3">
            <Button
              size="small"
              type="primary"
              onClick={() => setFormVisible(true)}
            >
              新增
            </Button>
          </Space>
        </>
      }
      onCancel={() => setVisible(false)}
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

export default GameListPopup
