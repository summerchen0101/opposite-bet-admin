import { PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Button, Col, Form as AntForm, Input, Row, Space } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const PercentFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('percentForm')
  const [form] = AntForm.useForm()
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      console.log('Received values of form: ', values)
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }

  return (
    <PopupModal
      visible={visible}
      title="msc51各项占成设定"
      onCancel={() => setVisible(false)}
      width={700}
      footer={[
        <Button key="reset" onClick={() => form.resetFields()}>
          重置
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          送出
        </Button>,
      ]}
    >
      <Form form={form}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="手续费占成比(%)">
              <Input addonBefore="上层 5 %" addonAfter="剩餘 5 %" suffix="%" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="退佣占成比(%)">
              <Input
                addonBefore="上层 0 %"
                addonAfter="剩餘 100 %"
                suffix="%"
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="优惠占成比(%)">
              <Input addonBefore="上层 0 %" addonAfter="上限 0 %" suffix="%" />
            </FormField>
          </Col>
          <Col span={12}></Col>
          <Col span={12}>
            <FormField label="游戏占成比(%)">
              <Input
                addonBefore="上层 55 %"
                addonAfter="剩餘 55 %"
                suffix="%"
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="游戏退水占成比(%)">
              <Input
                addonBefore="上层 55 %"
                addonAfter="剩餘 55 %"
                suffix="%"
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="單注(萬)">
              <Input addonBefore="上层 55 萬" suffix="萬" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="單場(萬)">
              <Input addonBefore="上层 55 萬" suffix="萬" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="單邊(萬)">
              <Input addonBefore="上层 55 萬" suffix="萬" />
            </FormField>
          </Col>
        </Row>
      </Form>
    </PopupModal>
  )
}

export default PercentFormPopup
