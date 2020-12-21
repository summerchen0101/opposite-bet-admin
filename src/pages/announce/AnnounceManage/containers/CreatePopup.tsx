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
      await onCreate({
        title: v.title,
        content: v.content,
        start_at: v.date_range[0].unix(),
        end_at: v.date_range[1].unix(),
        news_type: v.news_type,
        is_active: v.is_active,
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
      title="新增公告"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          title: '',
          content: '',
          date_range: [null, null],
          news_type: 2,
          is_active: true,
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
