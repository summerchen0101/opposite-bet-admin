import PopupModal from '@/components/PopupModal'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { Form } from 'antd'
import React from 'react'
import { CreateSection } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const { apiErr } = useErrorHandler()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as CreateSection
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
      title="新增場次"
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
