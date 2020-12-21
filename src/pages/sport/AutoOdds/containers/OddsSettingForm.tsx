import React from 'react'
import { Form, Input, Radio, Space, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { statusOpts } from '@/lib/options'
import { Status } from '@/lib/enums'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const OddsSettingForm: React.FC = () => {
  const [form] = Form.useForm()
  const values = {
    autoOdds: Status.ON,
    settings: [{ point: 100, percent: 0.1 }],
    tradePoint: 1000,
  }
  return (
    <Form form={form} initialValues={values}>
      <Form.Item
        label="是否自動降賠"
        name="autoOdds"
        help="【達到門檻的該筆即套用降賠;獲利率最低不小於上方設定之範圍】"
      >
        <Radio.Group options={statusOpts.filter((t) => t.value !== 0)} />
      </Form.Item>
      <Form.List name="settings">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Space key={field.key} className="w-100 mb-2">
                <Form.Item
                  {...field}
                  name={[field.name, 'point']}
                  fieldKey={[field.fieldKey, 'point']}
                  rules={[{ required: true, message: '請輸入降賠注額' }]}
                  className="mb-0"
                >
                  <Input
                    placeholder="100000"
                    addonAfter="元"
                    style={{ width: '150px' }}
                  />
                </Form.Item>
                <span>以上降</span>
                <Form.Item
                  {...field}
                  name={[field.name, 'percent']}
                  fieldKey={[field.fieldKey, 'percent']}
                  rules={[{ required: true, message: '請輸入降賠比例' }]}
                  className="mb-0"
                >
                  <Input
                    placeholder="0.1"
                    addonAfter="%"
                    style={{ width: '120px' }}
                  />
                </Form.Item>
                {fields.length > 1 && (
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() => remove(field.name)}
                  />
                )}
                {index === fields.length - 1 && (
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => add()}
                  />
                )}
              </Space>
            ))}
          </>
        )}
      </Form.List>

      <Form.Item label="可交易金額" name="tradePoint">
        <Input style={{ width: '150px' }} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button>重置</Button>
          <Button type="primary">送出</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default OddsSettingForm
