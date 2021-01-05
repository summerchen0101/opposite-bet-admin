import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Button, Descriptions, Divider, Form, Table } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'
import { ColumnsType } from 'antd/lib/table'
import { IPBlockType, PlatformType } from '@/lib/enums'

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
  const columns: ColumnsType<any> = [
    { title: '比分', render: (_, row) => '0-1' },
    { title: '結帳', render: (_, row) => <Button>結帳</Button> },
  ]
  return (
    <PopupModal
      visible={visible}
      title="3381 結帳/重新結帳"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      destroyOnClose
      width={700}
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

export default EditPopup
