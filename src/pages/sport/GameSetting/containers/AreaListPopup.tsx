import { PopupModal } from '@/components'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Button, Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const AreaListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('areaList')

  const columns = [
    { title: '代碼', render: (_, row) => 'USA' },
    { title: '名稱', render: (_, row) => '美國' },
    {
      title: '操作',
      render: (_, row) => (
        <Space>
          <a>編輯</a>
          <a>刪除</a>
        </Space>
      ),
      width: 120,
    },
  ]

  const data = [...Array(5)]

  return (
    <PopupModal
      visible={visible}
      title={
        <>
          地區列表
          <Space className="float-right mr-3">
            <Button size="small" type="primary">
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

export default AreaListPopup
