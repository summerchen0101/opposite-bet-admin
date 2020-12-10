import { IconLink, PopupConfirm, PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { addKeyToArrayItem } from '@/utils/transfer'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Form as AntForm, Input, Space, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const WhiteListPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('whiteList')
  const [form] = AntForm.useForm()

  const columns = [
    {
      key: 1,
      title: 'IP',
      dataIndex: 'ip',
      render: (_, row) => '0.0.0.0',
    },
    {
      key: 2,
      title: '操作',
      width: '80px',
      render: (_, row) => (
        <PopupConfirm>
          <IconLink icon={<DeleteOutlined />} color="#c45555" label="刪除" />
        </PopupConfirm>
      ),
    },
  ]
  const data = [...Array(10)]

  return (
    <PopupModal
      visible={visible}
      onCancel={() => setVisible(false)}
      title="IP 白名单"
    >
      <Form form={form}>
        <FormField label="IP" required name="col1">
          <Space>
            <Input placeholder="請輸入IP" style={{ width: '250px' }} />
            <Button type="primary">新增</Button>
          </Space>
        </FormField>

        <FormField>
          <Table
            dataSource={addKeyToArrayItem(data)}
            columns={columns}
            size="small"
            bordered
            pagination={{ pageSize: 8 }}
          />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default WhiteListPopup
