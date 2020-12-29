import { ColorText, IconLink, PopupConfirm, PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditFilled,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { Button, Space, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { FaqCategory } from '../API/category/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useTypedSelector, selectCategoryList } from '../selectors'
import { useAPIService } from '../service'

const CateogryListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('categoryList')
  const [, setCreateVisible] = usePopupProvider('categoryCreate')
  const onCancel = () => setVisible(false)
  const columns: ColumnsType<FaqCategory> = [
    {
      title: '排序',
      render: (_, row) => row.sort,
      width: '60px',
    },
    {
      title: '分類名稱',
      render: (_, row) => row.name,
    },
    {
      title: '狀態',
      render: (_, row) => {
        if (row.is_active) {
          return <ColorText green>啟用</ColorText>
        }
        return <ColorText red>停用</ColorText>
      },
      width: '80px',
    },
    {
      title: '操作',
      fixed: ('right' as unknown) as boolean,
      render(_, row) {
        const {
          changeCategoryActive,
          onDeleteCategory,
          getCategoryView,
        } = useAPIService()
        const [, setEditVisible] = usePopupProvider('categoryEdit')
        const handleEdit = async (id: number) => {
          await getCategoryView(id)
          setEditVisible(true)
        }
        return (
          <Space size="small">
            {row.is_active ? (
              <IconLink
                icon={<CloseCircleOutlined />}
                label="停用"
                color="red"
                onClick={() => changeCategoryActive(row.id, false)}
              />
            ) : (
              <IconLink
                icon={<CheckCircleOutlined />}
                label="啟用"
                color="green"
                onClick={() => changeCategoryActive(row.id, true)}
              />
            )}
            <IconLink
              icon={<EditFilled />}
              label="編輯"
              onClick={() => handleEdit(row.id)}
            />
            <PopupConfirm onConfirm={() => onDeleteCategory(row.id)}>
              <IconLink icon={<DeleteOutlined />} label="刪除" />
            </PopupConfirm>
          </Space>
        )
      },
      width: 70,
    },
  ]
  const data = useTypedSelector(selectCategoryList)
  return (
    <PopupModal
      visible={visible}
      title="分類列表"
      onCancel={onCancel}
      footer={false}
    >
      <Button
        onClick={() => setCreateVisible(true)}
        type="primary"
        className="mb-2"
      >
        新增
      </Button>

      <Table
        size="small"
        rowKey="id"
        pagination={{ pageSize: 6 }}
        bordered
        columns={columns}
        dataSource={data}
      />
    </PopupModal>
  )
}

export default CateogryListPopup
