import { CascaderSelector, PopupConfirm, Text, PopupModal } from '@/components'
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
import { toggleLoginHistoryModal } from '../reducer'
import { selectDisplayLoginHistoryModal, useTypedSelector } from '../selectors'
import { DeleteOutlined } from '@ant-design/icons'
const { Option } = Select
const LoginHistoryForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayLoginHistoryModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleLoginHistoryModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleLoginHistoryModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  let columns = [
    {
      title: '加盟商',
      render: () => '-',
    },
    {
      title: '代理',
      render: () => '-',
    },
    {
      title: 'IP',
      render: () => '0.0.0.0',
    },
    {
      title: '系統 / 瀏覽器',
      render: () => '-',
    },
    {
      title: '狀態',
      render: () => <Text color="success">成功</Text>,
    },
    {
      title: '國家',
      render: () => '-',
    },
    {
      title: '登入時間',
      render: () => '2020-12-12 10:49',
    },
  ]
  columns = columns.map((t, i) => ({ ...t, key: i }))
  const data = [...Array(10)]

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]

  return (
    <PopupModal
      visible={isDisplay}
      title="登入歷程"
      onCancel={onCancel}
      width={800}
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="組織層級">
              <CascaderSelector
                options={options}
                placeholder="加盟商 / 股東 / 總代"
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="IP">
              <Input.Search />
            </FormField>
          </Col>
        </Row>

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

export default LoginHistoryForm
