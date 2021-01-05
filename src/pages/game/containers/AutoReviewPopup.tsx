import PopupModal from '@/components/PopupModal'
import { Form, Switch } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
// import { useAPIService } from '../service'
import { FormData } from './DataForm'

const AutoReviewPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('autoReview')
  // const { onCreate } = useAPIService()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      // await onCreate({
      //   block_type: v.block_type,
      //   platform_type: v.platform_type,
      //   ip: v.ip,
      //   note: v.note,
      //   is_active: v.is_active,
      // })
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
      title="自動結帳設置"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <Form layout="vertical">
        <Form.Item label="自動結帳" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default AutoReviewPopup
