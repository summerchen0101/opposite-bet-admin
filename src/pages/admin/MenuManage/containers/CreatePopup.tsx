import PopupModal from '@/components/PopupModal'
import { Status } from '@/lib/enums'
import { Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { MenuFormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<MenuFormData>()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as MenuFormData
      await onCreate({
        ...values,
        is_active: values.is_active === Status.ON,
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
      title="新增選單"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          name: '',
          path: '',
          icon: '',
          is_active: Status.ON,
          permission_ids: [],
          role_ids: [],
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
