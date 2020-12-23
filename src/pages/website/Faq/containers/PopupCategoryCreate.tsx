import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Input, Select, Switch } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCategoryCreateModal } from '../reducer'
import {
  selectDisplayCategoryCreateModal,
  useTypedSelector,
} from '../selectors'
const { Option } = Select
const CategoryCreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCategoryCreateModal)
  const onCancel = () => {
    dispatch(toggleCategoryCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCategoryCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal
      visible={isDisplay}
      title="新增分類"
      onCancel={onCancel}
      width={300}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="分類名稱" name="mainTeam">
          <Input />
        </FormField>
        <FormField label="狀態" name="is_active" valuePropName="checked">
          <Switch />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CategoryCreateForm
