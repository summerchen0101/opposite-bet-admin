import { IconLink, PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Button, Col, Descriptions, Form, Input, Row, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import { FormData } from './DataForm'
import { SaveOutlined, DeleteOutlined } from '@ant-design/icons'

const columns: ColumnsType<{ id: number }> = [
  {
    title: '排序',
    render: (_, row) => ++row.id,
  },
  {
    title: '群組名稱',
    render: (_, row) => <Input defaultValue="輪替分類一" />,
  },
  {
    title: '帳戶數',
    render: (_, row) => 2,
  },
  {
    title: '操作',
    render: (_, row) => (
      <Space>
        <IconLink icon={<SaveOutlined />} label="儲存" />
        <IconLink icon={<DeleteOutlined />} label="刪除" color="red" />
      </Space>
    ),
    width: 200,
  },
]

const GroupListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('groupList')
  const [listCount, setListCount] = useState(1)
  return (
    <PopupModal
      visible={visible}
      title={
        <>
          管理輪替群組
          <Button
            size="small"
            type="primary"
            className="ml-2"
            onClick={() => setListCount((c) => ++c)}
          >
            新增群組
          </Button>
        </>
      }
      onCancel={() => setVisible(false)}
      footer={false}
      width={600}
    >
      <PopupTable
        columns={columns}
        data={[...Array(listCount)].map((_, id) => ({ id }))}
      />
    </PopupModal>
  )
}

export default GroupListPopup
