import PopupModal from '@/components/PopupModal'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { CategoryFormData } from './CategoryDataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('categoryCreate')
  const { onCreateCategory } = useAPIService()
  const [form] = Form.useForm()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as CategoryFormData
      await onCreateCategory(values)
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
      title="新增分類"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          name: '',
          sort: 0,
          is_active: true,
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
