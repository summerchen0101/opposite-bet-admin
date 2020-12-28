import PopupModal from '@/components/PopupModal'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { FormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onCreate(v)
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
      title="新增公告"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      width={700}
    >
      <DataForm
        form={form}
        values={{
          member_type: 1,
          title: '',
          content: '',
          receivers: [],
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
