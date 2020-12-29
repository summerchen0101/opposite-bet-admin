import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Form } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'
import moment from 'moment'

const EditPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editForm')
  const [form] = Form.useForm()
  const f = useTypedSelector(selectEditData)
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onEdit({
        id: f.id,
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
      title="編輯首頁輪播圖"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      destroyOnClose
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            title: f.title,
            url: f.url,
            date_range: [
              f.start_at && moment(f.start_at * 1000),
              f.end_at && moment(f.end_at * 1000),
            ],
            is_active: f.is_active,
            is_blank: f.is_blank,
            img: f.img,
            img_mobile: f.img_mobile,
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
