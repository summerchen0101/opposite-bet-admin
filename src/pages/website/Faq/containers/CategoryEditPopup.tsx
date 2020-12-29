import PopupModal from '@/components/PopupModal'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { selectCategoryView, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'
import DataForm, { CategoryFormData } from './CategoryDataForm'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('categoryEdit')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectCategoryView)
  const { onEditCategory } = useAPIService()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as CategoryFormData
      await onEditCategory({
        id: f.id,
        name: values.name,
        sort: values.sort,
        is_active: values.is_active,
      })
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  const handleCancel = () => {
    form.resetFields()
    setVisible(false)
  }
  return (
    <PopupModal
      visible={visible}
      title="編輯分類"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      destroyOnClose
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            name: f.name,
            sort: f.sort,
            is_active: f.is_active,
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
