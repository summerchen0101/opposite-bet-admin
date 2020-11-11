import { PopupModal } from '@/components'
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
import { togglePercentageModal } from '../reducer'
import { selectDisplayPercentageModal, useTypedSelector } from '../selectors'
const { Option } = Select
const PercentageForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayPercentageModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(togglePercentageModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(togglePercentageModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const columns = [
    {
      key: 1,
      title: '游戏平台',
      dataIndex: 'game',
      width: 120,
      render: (value) => value,
    },
    {
      key: 1,
      title: '占成比(%)',
      dataIndex: 'percentage',
      width: 120,
      render: (value) => value,
    },
    {
      key: 1,
      title: '退水占成比(%)',
      dataIndex: 'commission',
      width: 120,
      render: (value) => value,
    },
  ]
  const data = [
    {
      key: 1,
      game: '快速設定',
      percentage: <Input suffix="%" placeholder="0" />,
      commission: <Input suffix="%" placeholder="0" />,
    },
    {
      key: 2,
      game: 'STG',
      percentage: (
        <Input
          suffix="%"
          placeholder="0"
          addonBefore="上层 55 %"
          addonAfter="上限 55 %"
        />
      ),
      commission: (
        <Input
          suffix="%"
          placeholder="0"
          addonBefore="上层 55 %"
          addonAfter="上限 55 %"
        />
      ),
    },
  ]

  return (
    <PopupModal
      visible={isDisplay}
      title="总代理 / jjp01 【白】 各项占成设定"
      onCancel={onCancel}
      width={800}
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="手续费占成比(%)" required name="col1">
              <Input addonBefore="上层 0 %" addonAfter="上限 0 %" suffix="%" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="退佣占成比(%)" required name="col2">
              <Input
                addonBefore="上层 0 %"
                addonAfter="上限 100 %"
                suffix="%"
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="优惠占成比(%)" required name="col3">
              <Input addonBefore="上层 0 %" addonAfter="上限 0 %" suffix="%" />
            </FormField>
          </Col>
        </Row>

        <FormField>
          <Table
            dataSource={data}
            columns={columns}
            size="small"
            bordered
            pagination={false}
          />
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button htmlType="reset" onClick={onReset}>
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              送出
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default PercentageForm
