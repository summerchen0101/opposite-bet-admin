import React from 'react'
import { Form, Input, Radio, Space, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}
const statusOpts = [
  { label: '是', value: 'yes' },
  { label: '否', value: 'no' },
]

const OddsSettingForm: React.FC = () => {
  const [form] = Form.useForm()
  return (
    <Form {...layout} form={form}>
      <Form.Item
        label="是否自動降賠"
        name="autoOdds"
        initialValue="yes"
        help="【達到門檻的該筆即套用降賠;獲利率最低不小於上方設定之範圍】"
      >
        <Radio.Group options={statusOpts} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        {[...Array(2)].map((t, i) => (
          <Space className="mb-1" key={i}>
            <Input
              placeholder="100000"
              addonAfter="元"
              style={{ width: '150px' }}
            />
            以上降
            <Input
              placeholder="0.1"
              addonAfter="%"
              style={{ width: '120px' }}
            />
            <Button type="primary" icon={<PlusOutlined />} />
            {i !== 0 && <Button icon={<MinusOutlined />} />}
          </Space>
        ))}
      </Form.Item>
      <Form.Item label="可交易金額">
        <Input style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button>重置</Button>
          <Button type="primary">送出</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default OddsSettingForm
