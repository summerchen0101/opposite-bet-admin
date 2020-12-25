import { ImageUpload, PureContentEditor } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Device } from '@/lib/enums'
import { deviceOpts } from '@/lib/options'
import { Col, Collapse, Form, Input, Radio, Row, Select, Switch } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const EditForm: React.FC = () => {
  const [form] = Form.useForm()
  const [visible, setVisbiel] = usePopupProvider('createForm')
  const categoryOpts = [{ label: '存款問題', value: 1 }]
  return (
    <PopupModal
      visible={visible}
      title="新增常見問題"
      onCancel={() => setVisbiel(false)}
      width={700}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item label="標題" name="title">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="分類" name="category" initialValue={1}>
              <Select options={categoryOpts} />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item label="平台顯示" name="platform" initialValue={0}>
              <Radio.Group>
                <Radio value={0}>全部</Radio>
                <Radio value={1}>手機版</Radio>
                <Radio value={2}>桌上型電腦</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="狀態" name="is_active" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
        </Row>
        <Collapse defaultActiveKey={[Device.PC, Device.Mobile]}>
          {deviceOpts.map((t, i) => (
            <Collapse.Panel header={t.label} key={t.value}>
              <Form.Item>
                <PureContentEditor />
              </Form.Item>
            </Collapse.Panel>
          ))}
        </Collapse>
      </Form>
    </PopupModal>
  )
}

export default EditForm
