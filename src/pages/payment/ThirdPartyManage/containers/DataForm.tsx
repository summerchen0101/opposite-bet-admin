import { PopupTable } from '@/components'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { bankCodeOpts, paywayOpts, thirdPartyOpts } from '@/lib/options'
import {
  Checkbox,
  Col,
  Descriptions,
  Divider,
  Form,
  Input,
  Popover,
  Row,
  Select,
  Space,
  Switch,
  Tooltip,
} from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'
import { FormInstance } from 'antd/lib/form'
import { ColumnsType } from 'antd/lib/table'
import React, { useEffect } from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'
export interface FormData {
  id?: number
  block_type: IPBlockType
  platform_type: PlatformType
  ip: string
  note: string
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const options = [
  { label: '預設', value: 1 },
  { label: '輪替分類一', value: 2 },
]
const columns: ColumnsType<{ id: number }> = [
  {
    title: '啟用狀態',
    render: (_, row) => <Switch defaultChecked />,
    width: 100,
  },
  { title: '支付方式', render: (_, row) => '信用卡', width: 100 },
  {
    title: (
      <Space>
        背景取號
        <Popover
          title="使用背景取號"
          content={
            <>
              ※會員端操作不會看到金流商頁面
              <br />
              ※背景取號模式可能受金流商調整畫面或更改通道影響導致失敗
            </>
          }
        >
          <QuestionCircleOutlined />
        </Popover>
      </Space>
    ),
    render: (_, row) => <Checkbox />,
    width: 120,
  },
  { title: '最低充值金額', render: (_, row) => '9,000', width: 120 },
  { title: '最高充值金額', render: (_, row) => '9,000', width: 120 },
  {
    title: (
      <Space>
        手續費
        <Popover
          title="手續費"
          content={
            <>
              <b>手續費比率值：</b>每筆抽 %，如果是抽 %
              制，請將「手續費固定值」設為 0，計算時會合計 手續費固定值。
              <br />
              注：此欄位的值須除以 100，如 1% 手續費 請輸入 0.01
              <br />
              <b>手續費固定值：</b>
              每筆固定，如果是固定制，請將「手續費比例值」設為 0，計算時會合計
              手續費比例值 <br />
              <b>手續費下限：</b>最低收(不填 表示無限制)
              <br />
              <b>手續費上限：</b>最高收(不填 表示無限制)
            </>
          }
        >
          <QuestionCircleOutlined />
        </Popover>
      </Space>
    ),
    render: (_, row) => (
      <>
        <Space className="w-100">
          會員負擔
          <Input
            addonAfter="%"
            placeholder="百分比"
            style={{ width: '120px' }}
          />
          +
          <Input placeholder="固定金額" style={{ width: '80px' }} />
          <Input.Group compact>
            <Input
              placeholder="下限"
              style={{ width: '120px' }}
              addonAfter="~"
            />
            <Input placeholder="上限" style={{ width: '90px' }} />
          </Input.Group>
        </Space>
      </>
    ),
    width: 600,
  },
]
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="輪替群組">
            <Select options={options} defaultValue={1} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="金流商">
            <Select options={thirdPartyOpts} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="支付工具別名">
            <Input />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item label="備註">
            <Input.TextArea />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="啟用狀態" valuePropName="checked">
            <Switch defaultChecked />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="累計充值上限">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="最低充值金額">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="最高充值金額">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">金流商設定</Divider>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="特店編號">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Hash Key">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Hash IV">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">允許支付方式</Divider>
      <PopupTable
        columns={columns}
        data={[...Array(2)].map((_, id) => ({ id }))}
        scroll={{ x: 1100 }}
      />
    </Form>
  )
}

export default DataForm
