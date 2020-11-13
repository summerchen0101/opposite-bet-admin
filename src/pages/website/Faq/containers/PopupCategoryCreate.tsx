import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Checkbox, Input, Select, Space } from 'antd'
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
        <FormField label="繁體標題" name="mainTeam" required>
          <Input />
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CategoryCreateForm
