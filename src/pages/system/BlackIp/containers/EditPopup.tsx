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
        content: v.content,
        url: v.url,
        is_blank: v.is_blank,
        start_at: v.date_range_type === 'limit' ? v.limit_range[0].unix() : 0,
        end_at: v.date_range_type === 'limit' ? v.limit_range[1].unix() : 0,
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
      title="編輯跑馬燈"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      destroyOnClose
    >
      {f && (
        <DataForm
          form={form}
          values={{
            id: f.id,
            content: f.content,
            url: f.url,
            date_range_type: f.start_at ? 'limit' : 'forever',
            limit_range: [
              f.start_at && moment(f.start_at * 1000),
              f.end_at && moment(f.end_at * 1000),
            ],
            is_active: f.is_active,
            is_blank: f.is_blank,
          }}
        />
      )}
    </PopupModal>
  )
}

export default EditPopup
