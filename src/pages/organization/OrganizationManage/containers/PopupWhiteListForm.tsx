import { PopupConfirm, IconLink, PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import {
  Button,
  Col,
  Form as AntForm,
  Input,
  Row,
  Select,
  Space,
  Table,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleWhiteListModal } from '../reducer'
import { selectDisplayWhiteListModal, useTypedSelector } from '../selectors'
import { DeleteOutlined } from '@ant-design/icons'
const { Option } = Select
const WhiteListForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayWhiteListModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleWhiteListModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleWhiteListModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const columns = [
    {
      key: 1,
      title: 'IP',
      dataIndex: 'ip',
      render: () => '0.0.0.0',
    },
    {
      key: 2,
      title: '操作',
      width: '80px',
      render: () => (
        <PopupConfirm>
          <IconLink icon={<DeleteOutlined />} color="#c45555" label="刪除" />
        </PopupConfirm>
      ),
    },
  ]
  const data = [...Array(10)]

  return (
    <PopupModal visible={isDisplay} title="IP 白名单" onCancel={onCancel}>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="IP" required name="col1">
          <Space>
            <Input placeholder="請輸入IP" style={{ width: '250px' }} />
            <Button type="primary">新增</Button>
          </Space>
        </FormField>

        <FormField>
          <Table
            dataSource={data}
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

export default WhiteListForm
