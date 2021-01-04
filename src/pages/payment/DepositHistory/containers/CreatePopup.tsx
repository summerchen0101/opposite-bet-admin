import PopupModal from '@/components/PopupModal'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { Button, Form } from 'antd'
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
        block_type: v.block_type,
        platform_type: v.platform_type,
        ip: v.ip,
        note: v.note,
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
      title="充值審核"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      footer={[
        <Button key="reset" type="primary" onClick={handleCancel}>
          通過
        </Button>,
        <Button key="submit" type="primary" danger onClick={handleCancel}>
          拒絕
        </Button>,
      ]}
    >
      <DataForm
        form={form}
        values={{
          block_type: IPBlockType.Black,
          platform_type: PlatformType.Admin,
          ip: '',
          note: '',
          is_active: true,
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
