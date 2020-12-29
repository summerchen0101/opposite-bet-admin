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
        url: v.url,
        is_blank: v.is_blank,
        start_at: v.date_range[0].unix() || 0,
        end_at: v.date_range[1].unix() || 0,
        is_active: v.is_active,
        img: v.img,
        img_mobile: v.img_mobile,
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
      title="新增首頁輪播圖"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          title: '',
          url: '',
          date_range: [null, null],
          is_active: true,
          is_blank: false,
          img: '',
          img_mobile: '',
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
