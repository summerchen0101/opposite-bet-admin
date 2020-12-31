import PopupModal from '@/components/PopupModal'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import DataForm, { FormData } from './DataForm'
import { Button, Descriptions, Divider, Form, Table } from 'antd'
import { useAPIService } from '../service'
import { useTypedSelector, selectEditData } from '../selectors'
import { ColumnsType } from 'antd/lib/table'

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
      <Descriptions bordered size="small" column={2}>
        <Descriptions.Item label="開賽時間">
          2020-12-30 09:11:20
        </Descriptions.Item>
        <Descriptions.Item label="帳務日期">2020-12-30</Descriptions.Item>
        <Descriptions.Item label="球種">美棒</Descriptions.Item>
        <Descriptions.Item label="聯盟">某個聯盟</Descriptions.Item>
        <Descriptions.Item label="主隊">主隊的名字</Descriptions.Item>
        <Descriptions.Item label="客隊">客隊的名字</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Table size="small" columns={columns} dataSource={[{ key: 1 }]} />
    </PopupModal>
  )
}

export default EditPopup
