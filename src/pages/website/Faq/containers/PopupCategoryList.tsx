import { IconLink, PopupTable } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Input, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCategoryCreateModal, toggleCategoryListModal } from '../reducer'
import { selectDisplayCategoryListModal, useTypedSelector } from '../selectors'
import {
  FilterFilled,
  DeleteOutlined,
  EditFilled,
  StopOutlined,
} from '@ant-design/icons'
const { Option } = Select
const CategoryListForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCategoryListModal)
  const onCancel = () => {
    dispatch(toggleCategoryListModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCategoryListModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const columns = [
    {
      title: '排序',
      render: (_, row, index) => index + 1,
      width: '60px',
    },
    {
      title: '分類標題',
      render: (_, row) => '存款',
    },
    {
      title: '狀態',
      render: (_, row) => '啟用',
      width: '80px',
    },
    {
      title: () => (
        <>
          <Space size="small">操作</Space>
          <IconLink
            icon={<FilterFilled />}
            style={{ float: 'right', marginBottom: -4 }}
          />
        </>
      ),
      key: 'control',
      fixed: ('right' as unknown) as boolean,
      render(_, row) {
        return (
          <Space size="small">
            <IconLink icon={<StopOutlined />} label="停用" />
            <IconLink icon={<EditFilled />} label="編輯" />
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </Space>
        )
      },
      width: 70,
    },
  ]
  const data = [...Array(10)].map((t, i) => ({ ...t, key: i }))
  const handleCreateClicked = () => dispatch(toggleCategoryCreateModal(true))
  return (
    <PopupModal visible={isDisplay} title="分類列表" onCancel={onCancel}>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="inline"
        style={{ display: 'inline-block' }}
      >
        <FormField label="銀行帳戶" required>
          <Input />
        </FormField>
      </Form>
      <Button
        onClick={handleCreateClicked}
        type="primary"
        style={{ float: 'right' }}
      >
        新增
      </Button>

      <PopupTable columns={columns} data={data} />
    </PopupModal>
  )
}

export default CategoryListForm
