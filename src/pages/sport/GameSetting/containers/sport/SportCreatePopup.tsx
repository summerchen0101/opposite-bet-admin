import { PopupModal } from '@/components'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'
import { useAPIService } from '../../service/sport'
import SportDataForm, { FormData } from './SportDataForm'

const SportFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createSport')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm()

  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as FormData
      console.log('Received values of form: ', values)
      onCreate(values)
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
      width={360}
      zIndex={2}
    >
      <SportDataForm
        form={form}
        values={{
          code: '',
          name: '',
          note: '',
          country_id: null,
          is_active: true,
        }}
      />
    </PopupModal>
  )
}

export default SportFormPopup
