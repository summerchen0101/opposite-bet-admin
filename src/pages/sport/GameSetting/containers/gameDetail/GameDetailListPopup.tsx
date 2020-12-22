import { PopupModal } from '@/components'
import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Button, Select, Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'

const GameDetailListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('gameDetailList')
  const [formVisible, setFormVisible] = usePopupProvider('gameDetailForm')

  const columns = [
    { title: '代碼', render: (_, row) => 'xxx', width: 150 },
    { title: '名稱', render: (_, row) => '1-0', width: 150 },
    { title: '主客和', render: (_, row) => '主', width: 150 },
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
  const gameOpts = [
    { label: '反波膽', value: 'opposite' },
    { label: '總得分', value: 'total' },
  ]
  return (
    <PopupModal
      visible={visible}
      title={
        <>
          玩法細項列表
          <Space className="float-right mr-3">
            <Select options={gameOpts} defaultValue="opposite" size="small" />
            {/* <Button
              size="small"
              type="primary"
              onClick={() => setFormVisible(true)}
            >
              新增
            </Button> */}
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

export default GameDetailListPopup
