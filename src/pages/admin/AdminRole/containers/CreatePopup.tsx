import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Form, message } from 'antd'
import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { useAPIService } from '../service'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const { apiErr } = useErrorHandler()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      await onCreate(values)
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
      title="新增管理者角色"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          name: '',
          is_active: true,
          permission_ids: [],
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
