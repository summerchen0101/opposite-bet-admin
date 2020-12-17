import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Form, message } from 'antd'
import API from '@/API'
import useErrorHandler from '@/utils/hooks/useErrorHandler'
import { useAPIService } from '../service'
import { BlockStatus } from '../API/types'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onCreate({
        acc: v.acc,
        pass: v.pass,
        name: v.name,
        role_ids: v.role_ids,
        permission_ids: v.permission_ids,
        is_active: v.is_active,
        status: v.is_lock ? BlockStatus.Blocked : BlockStatus.Normal,
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
      title="新增管理者"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          name: '',
          acc: '',
          pass: '',
          pass_c: '',
          is_active: true,
          is_lock: false,
          role_ids: [],
          permission_ids: [],
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
