import { PopupModal } from '@/components'
import { IconLink, PopupConfirm, TableSets } from '@/components'
import {
  DeleteOutlined,
  EditOutlined,
  DribbbleOutlined,
} from '@ant-design/icons'
import { addKeyToArrayItem } from '@/utils/transfer'
import { Button, Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'

const CategoryListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('categoryList')
  const [formVisible, setFormVisible] = usePopupProvider('categoryForm')

  const columns = [
    { title: '代碼', render: (_, row) => 'SOCCOR', width: 150 },
    { title: '圖標', render: (_, row) => <DribbbleOutlined />, width: 150 },
    { title: '國家', render: (_, row) => '美國', width: 150 },
    { title: '名稱', render: (_, row) => '美足', width: 150 },
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
          球種列表
          {/* <Space className="float-right mr-3">
            <Button
              size="small"
              type="primary"
              onClick={() => setFormVisible(true)}
            >
              新增
            </Button>
          </Space> */}
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

export default CategoryListPopup
