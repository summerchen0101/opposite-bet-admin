import { IconLink, PopupModal, Text } from '@/components'
import Form, { FormField } from '@/components/Form'
import { ReloadOutlined } from '@ant-design/icons'
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
import { togglePointFormModal, toggleTradeHistoryModal } from '../reducer'
import { selectDisplayTradeHistoryModal, useTypedSelector } from '../selectors'
const { Option } = Select
const TradeHistoryForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayTradeHistoryModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleTradeHistoryModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleTradeHistoryModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  let columns = [
    {
      title: '建立時間',
      render: () => '2020-08-28 17:54:03',
      width: '180px',
    },
    {
      title: '交易類型',
      render: () => '-',
    },
    {
      title: '可用點數',
      children: [
        {
          title: '異動前',
          render: () => '0',
          key: 'point-before',
        },
        {
          title: '異動後',
          render: () => '0',
          key: 'point-after',
        },
      ],
    },
    {
      title: '結算金',
      children: [
        {
          title: '異動前',
          key: 'result-before',
          render: () => <Text color="danger">-500</Text>,
        },
        {
          title: '異動後',
          key: 'result-after',
          render: () => <Text color="success">1,200</Text>,
        },
      ],
    },
    {
      title: '備註',
      render: () => '-',
    },
    {
      title: 'IP',
      render: () => '0.0.0.0',
    },
    {
      title: '更新人員',
      render: () => 'flora',
    },
    {
      title: '更新時間',
      render: () => '2020-12-12 10:49',
      width: '180px',
    },
  ]
  columns = columns.map((t, i) => ({ ...t, key: i }))
  const data = [...Array(10)].map((t, i) => ({ ...t, key: i }))
  const handlePointModify = () => dispatch(togglePointFormModal(true))
  return (
    <PopupModal
      visible={isDisplay}
      title={
        <Space>
          <span>交易记录</span>
          <IconLink icon={<ReloadOutlined />} label="重新整理" />
        </Space>
      }
      onCancel={onCancel}
      width={1000}
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={8}>
            <FormField label="可用點數">
              <Space>
                <Input itemType="number" placeholder="0" />
                <Button type="primary" onClick={handlePointModify}>
                  修改
                </Button>
              </Space>
            </FormField>
          </Col>
          <Col span={8}>
            <FormField label="結算金">
              <Input itemType="number" placeholder="0" />
            </FormField>
          </Col>
          <Col span={8}>
            <FormField label="類型">
              <Select placeholder="請選擇" allowClear defaultValue="opt1">
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

export default TradeHistoryForm
