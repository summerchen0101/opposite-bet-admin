import { CascaderSelector, PopupConfirm, Text, PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import {
  Alert,
  Button,
  Col,
  Form as AntForm,
  Input,
  Row,
  Select,
  Space,
  Table,
} from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { togglePointFormModal } from '../reducer'
import { selectDisplayPointFormModal, useTypedSelector } from '../selectors'
import { DeleteOutlined } from '@ant-design/icons'
const { Option } = Select
const PointFormForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayPointFormModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(togglePointFormModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(togglePointFormModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  let columns = [
    {
      title: '加盟商',
      render: (_, row) => '-',
    },
    {
      title: '代理',
      render: (_, row) => '-',
    },
    {
      title: 'IP',
      render: (_, row) => '0.0.0.0',
    },
    {
      title: '系統 / 瀏覽器',
      render: (_, row) => '-',
    },
    {
      title: '狀態',
      render: (_, row) => <Text color="success">成功</Text>,
    },
    {
      title: '國家',
      render: (_, row) => '-',
    },
    {
      title: '登入時間',
      render: (_, row) => '2020-12-12 10:49',
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
  const [calculator, setCalculator] = useState('+')
  const handleCalculator = () => setCalculator(calculator === '+' ? '-' : '+')

  return (
    <PopupModal
      visible={isDisplay}
      title="可用点数修改"
      onCancel={onCancel}
      width={600}
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="組織層級">
          <CascaderSelector
            options={options}
            placeholder="加盟商 / 股東 / 總代"
          />
        </FormField>
        <Row gutter={16}>
          <Col span={8}>
            <FormField label="選擇交易類型">
              <Select placeholder="請選擇" allowClear defaultValue="opt3">
                <Option value="opt1">全部</Option>
                <Option value="opt2">公司修改</Option>
                <Option value="opt3">派點/收回</Option>
                <Option value="opt4">收到點數/被收回</Option>
                <Option value="opt5">錯誤補點/收回</Option>
                <Option value="opt6">兌換結算/可用點數</Option>
                <Option value="opt7">預借/交收</Option>
              </Select>
            </FormField>
          </Col>
          <Col span={16}>
            <FormField label="對象額度">
              <Input.Group compact>
                <Input
                  placeholder="0"
                  disabled
                  style={{ width: 80, textAlign: 'center' }}
                />
                <Input
                  placeholder="0"
                  style={{ width: 150, textAlign: 'center' }}
                  addonBefore={
                    <span onClick={handleCalculator}>{calculator}</span>
                  }
                  addonAfter="="
                />
                <Input
                  placeholder="0"
                  disabled
                  style={{ width: 80, textAlign: 'center' }}
                />
              </Input.Group>
            </FormField>
          </Col>
        </Row>
        <FormField label="流水量">
          <Input placeholder="0" itemType="number" />
        </FormField>
        <FormField label="備註">
          <Input.TextArea />
        </FormField>
        <FormField>
          <Alert
            message="派点"
            description="扣除您的「可用点数额」来派给对象「new01」 (PS: 必需有足够的可用点数)。"
            type="info"
            showIcon
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

export default PointFormForm
