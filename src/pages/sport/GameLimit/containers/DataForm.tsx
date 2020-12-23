import { Button, Col, Input, Row, Space } from 'antd'
import Form, { FormInstance } from 'antd/lib/form'
import React from 'react'
import {
  SettingOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form'

const DataForm: React.FC<{ title: string; count: number }> = ({
  title,
  count,
}) => {
  const [form] = useForm()
  return (
    <div>
      <h2>{title}</h2>
      <Form
        form={form}
        size="small"
        initialValues={{
          settings: [...Array(count)].map((t, i) => ({ score: `1-${i}` })),
        }}
      >
        <Form.List name="settings">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space key={field.key} className="w-100 mb-1">
                  <Form.Item
                    {...field}
                    name={[field.name, 'score']}
                    fieldKey={[field.fieldKey, 'score']}
                    rules={[{ required: true, message: '請輸入比分' }]}
                    className="mb-0"
                  >
                    <Input placeholder="比分" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'odds']}
                    fieldKey={[field.fieldKey, 'odds']}
                    rules={[{ required: true, message: '請輸入賠率' }]}
                    className="mb-0"
                  >
                    <Input placeholder="賠率" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'maxPoint']}
                    fieldKey={[field.fieldKey, 'maxPoint']}
                    rules={[{ required: true, message: '請輸入可交易量' }]}
                    className="mb-0"
                  >
                    <Input placeholder="可交易量" />
                  </Form.Item>
                  <SettingOutlined onClick={() => {}} />
                  <Form.Item
                    {...field}
                    name={[field.name, 'maxPerBet']}
                    fieldKey={[field.fieldKey, 'maxPoint']}
                    rules={[{ required: true, message: '請輸入單注上限' }]}
                    className="mb-0"
                  >
                    <Input placeholder="單注上限" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'minPerBet']}
                    fieldKey={[field.fieldKey, 'maxPoint']}
                    rules={[{ required: true, message: '請輸入單注下限' }]}
                    className="mb-0"
                  >
                    <Input placeholder="單注下限" />
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  增加比分
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

export default DataForm
