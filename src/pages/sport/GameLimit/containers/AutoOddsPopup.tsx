import { PopupModal } from '@/components'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { Form, Input, Radio, Space, Button } from 'antd'
import {
  PlusOutlined,
  MinusOutlined,
  MinusCircleOutlined,
  PlusCircleTwoTone,
} from '@ant-design/icons'
import { statusOpts, yesNoOpts } from '@/lib/options'
import { Status, YesNo } from '@/lib/enums'

const AutoOddsPopup: React.FC = () => {
  const [form] = Form.useForm()
  const values = {
    autoOdds: YesNo.YES,
    settings: [{ point: 100, percent: 0.1 }],
    tradePoint: 1000,
  }
  const [visible, setVisible] = usePopupProvider('autoOdds')
  return (
    <PopupModal
      visible={visible}
      title="1-0 降賠設置"
      onCancel={() => setVisible(false)}
    >
      <Form form={form} initialValues={values} layout="vertical">
        <Form.Item label="是否自動降賠" name="autoOdds">
          <Radio.Group options={yesNoOpts} />
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
                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  )}
                  {index === fields.length - 1 && (
                    <PlusCircleTwoTone onClick={() => add()} />
                  )}
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Form>
    </PopupModal>
  )
}

export default AutoOddsPopup
