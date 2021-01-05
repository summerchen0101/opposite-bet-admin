import PopupModal from '@/components/PopupModal'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { Button, Form } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import DataForm, { FormData } from './PercentDataForm'

const PercentCreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('percentCreate')
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
      title="新增/編輯佔成設定"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
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

export default PercentCreatePopup
