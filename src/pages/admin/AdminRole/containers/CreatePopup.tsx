import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Form, message } from 'antd'
import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { apiErr } = useErrorHandler()
  const [form] = Form.useForm<FormData>()
  const onCreate = async (values) => {
    try {
      await API.adminRole.create(values as FormData)
      await API.adminRole.fetchAll()
      message.success('新增成功')
    } catch (err) {
      apiErr(err)
    }
  }
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
  return (
    <PopupModal
      visible={visible}
      title="新增管理者角色"
      onCancel={() => setVisible(false)}
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
