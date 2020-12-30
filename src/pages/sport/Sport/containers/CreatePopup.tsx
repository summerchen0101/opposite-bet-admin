import PopupModal from '@/components/PopupModal'
import { Form } from 'antd'
import React from 'react'
import { CreateSport } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as CreateSport
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
      title="新增體育"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          name: '',
          code: '',
          note: '',
          is_active: true,
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
