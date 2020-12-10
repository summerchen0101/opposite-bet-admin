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
import { usePopupProvider } from '../context/PopupProvider'
const { Option } = Select
const DepositHistoryPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('depositHistory')
  const [form] = AntForm.useForm()

  let columns = [
    {
      title: '建立時間',
      render: (_, row) => '2020-08-28 17:54:03',
      width: '180px',
    },
    {
      title: '交易類型',
      render: (_, row) => '-',
    },
    {
      title: '可用點數',
      children: [
        {
          title: '異動前',
          render: (_, row) => '0',
          key: 'point-before',
        },
        {
          title: '異動後',
          render: (_, row) => '0',
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
          render: (_, row) => <Text color="danger">-500</Text>,
        },
        {
          title: '異動後',
          key: 'result-after',
          render: (_, row) => <Text color="success">1,200</Text>,
        },
      ],
    },
    {
      title: '備註',
      render: (_, row) => '-',
    },
    {
      title: 'IP',
      render: (_, row) => '0.0.0.0',
    },
    {
      title: '更新人員',
      render: (_, row) => 'flora',
    },
    {
      title: '更新時間',
      render: (_, row) => '2020-12-12 10:49',
      width: '180px',
    },
  ]
  columns = columns.map((t, i) => ({ ...t, key: i }))
  const data = [...Array(10)].map((t, i) => ({ ...t, key: i }))
  return (
    <PopupModal
      visible={visible}
      title={
        <Space>
          <span>goo123交易记录</span>
          <IconLink icon={<ReloadOutlined />} label="重新整理" />
        </Space>
      }
      onCancel={() => setVisible(false)}
      width={1000}
    >
      <Form form={form}>
        <Row gutter={16}>
          <Col span={8}>
            <FormField label="可用點數">
              <Input itemType="number" placeholder="0" />
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

export default DepositHistoryPopup
