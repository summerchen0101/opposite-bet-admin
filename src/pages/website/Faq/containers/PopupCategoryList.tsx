import { ColorText, IconLink, PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  MenuOutlined,
} from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCategoryCreateModal, toggleCategoryListModal } from '../reducer'
import { selectDisplayCategoryListModal, useTypedSelector } from '../selectors'

const CategoryListForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCategoryListModal)
  const onCancel = () => {
    dispatch(toggleCategoryListModal(false))
  }
  const columns = [
    {
      title: '排序',
      render: (_, row) => <MenuOutlined />,
      width: '60px',
    },
    {
      title: '分類標題',
      render: (_, row) => '存款',
    },
    {
      title: '狀態',
      render: (_, row) => <ColorText green>啟用</ColorText>,
      width: '80px',
    },
    {
      title: '操作',
      key: 'control',
      fixed: ('right' as unknown) as boolean,
      render(_, row) {
        return (
          <Space size="small">
            <IconLink color="red" icon={<CloseCircleOutlined />} label="停用" />
            <IconLink icon={<EditFilled />} label="編輯" />
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </Space>
        )
      },
      width: 70,
    },
  ]
  const data = [...Array(5)].map((t, i) => ({ ...t, key: i }))
  const handleCreateClicked = () => dispatch(toggleCategoryCreateModal(true))
  return (
    <PopupModal visible={isDisplay} title="分類列表" onCancel={onCancel}>
      <Button onClick={handleCreateClicked} type="primary" className="mb-2">
        新增
      </Button>

      <PopupTable columns={columns} data={data} pagination={false} />
    </PopupModal>
  )
}

export default CategoryListForm
