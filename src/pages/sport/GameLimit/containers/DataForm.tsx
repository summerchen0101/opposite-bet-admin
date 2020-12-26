import { Button, Col, Input, Row, Space } from 'antd'
import Form, { FormInstance } from 'antd/lib/form'
import React from 'react'
import {
  SettingOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons'
import { useForm } from 'antd/lib/form/Form'
import { usePopupProvider } from '../context/PopupProvider'
interface DataProps {
  label: string
  code: string
  count: number
}
const DataForm: React.FC<{ data: DataProps }> = ({ data }) => {
  const { label, count, code } = data
  const [form] = useForm()
  const setVisible = usePopupProvider('autoOdds')[1]
  return (
    <div className="mb-2">
      <h2>{label}</h2>
      <Form
        form={form}
        size="small"
        initialValues={{
          [code]: [...Array(count)].map((t, i) => ({ score: `1-${i}` })),
        }}
      >
        <Form.List name={code}>
          {(fields, { add, remove }) => (
            <>
              <Space className="w-100 mb-1">
                <Form.Item className="mb-0">
                  <Input readOnly value="批次設定" className="bg-grey" />
                </Form.Item>
                <Form.Item className="mb-0">
                  <Input placeholder="獲利 %" className="bg-grey" />
                </Form.Item>
                <Form.Item className="mb-0">
                  <Input placeholder="可交易量" className="bg-grey" />
                </Form.Item>
                <SettingOutlined onClick={() => setVisible(true)} />
                <Form.Item className="mb-0">
                  <Input placeholder="單注上限" className="bg-grey" />
                </Form.Item>
                <Form.Item className="mb-0">
                  <Input placeholder="單注下限" className="bg-grey" />
                </Form.Item>
                <MinusCircleOutlined style={{ visibility: 'hidden' }} />
                <PlusCircleTwoTone style={{ visibility: 'hidden' }} />
              </Space>
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
                    <Input placeholder="獲利 %" />
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
                  <SettingOutlined onClick={() => setVisible(true)} />
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

                  <MinusCircleOutlined
                    style={{
                      visibility: fields.length > 1 ? 'visible' : 'hidden',
                    }}
                    onClick={() => remove(field.name)}
                  />
                  <PlusCircleTwoTone
                    style={{
                      visibility:
                        index === fields.length - 1 ? 'visible' : 'hidden',
                    }}
                    onClick={() => add()}
                  />
                </Space>
              ))}
              {/* <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  增加比分
                </Button>
              </Form.Item> */}
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

export default DataForm
