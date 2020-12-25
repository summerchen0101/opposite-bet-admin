import { PopupModal } from '@/components'
import { FormField } from '@/components/Form'
import { Button, Col, Form, Input, Radio, Row, Select } from 'antd'
import React, { useState } from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const PointFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('pointForm')
  const [operatorType, setOperatorType] = useState(1)
  const [form] = Form.useForm()
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
  const [calculator, setCalculator] = useState('+')
  const handleCalculator = () => setCalculator(calculator === '+' ? '-' : '+')
  const depositOpts = [
    { label: '新增存款(計入存款)', value: 1 },
    { label: '人工加錢(計入調整金額)', value: 2 },
    { label: '人工優惠(計入活動優惠)', value: 3 },
  ]
  const withdrawOpts = [
    { label: '新增提領(計入提領)', value: 1 },
    { label: '人工扣錢(計入調整金額)', value: 2 },
    { label: '人工扣除優惠(計入活動優惠)', value: 3 },
  ]
  const tradeOpts = [
    { label: '存款', value: 1 },
    { label: '提款', value: 2 },
  ]
  return (
    <PopupModal
      visible={visible}
      title="wxg1111[沈沈] 調節金額"
      onCancel={() => setVisible(false)}
      footer={[
        <Button key="reset" onClick={() => form.resetFields()}>
          重置
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          送出
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <FormField label="調整類型" name="operatorType" initialValue={1}>
          <Radio.Group
            options={tradeOpts}
            onChange={(e) => setOperatorType(e.target.value)}
          />
        </FormField>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="點數類型" name="pointType" initialValue={1}>
              <Select
                placeholder="請選擇"
                options={operatorType === 1 ? depositOpts : withdrawOpts}
              />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="異動金額">
              <Input addonBefore={operatorType === 1 ? '﹢' : '﹣'} />
            </FormField>
          </Col>
        </Row>

        <FormField label="備註">
          <Input.TextArea />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default PointFormPopup
