import { PopupModal } from '@/components'
import { FormField } from '@/components/Form'
import { getParentLevelCodes, getLevelName } from '@/utils/transfer'
import { Button, Input, Form, Select, Alert } from 'antd'
import React, { useState } from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import { usePopupProvider } from '../context/PopupProvider'
const PointFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('pointForm')
  const { currentLevel } = useLevelProvider()
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
  const parents = getParentLevelCodes(currentLevel)
  const { Option } = Select
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
        <FormField label="組織層級">
          {parents.map((code, i) => {
            return (
              <span key={code}>
                <span>abCC1xx</span>
                {i < parents.length - 1 && ' / '}
              </span>
            )
          })}
        </FormField>
        <FormField label="選擇交易類型" name="type" initialValue="opt1">
          <Select placeholder="請選擇">
            <Option value="opt1">全部</Option>
            <Option value="opt2">公司修改</Option>
            <Option value="opt3">派點/收回</Option>
            <Option value="opt4">收到點數/被收回</Option>
            <Option value="opt5">錯誤補點/收回</Option>
            <Option value="opt6">兌換結算/可用點數</Option>
            <Option value="opt7">預借/交收</Option>
          </Select>
        </FormField>
        <FormField label="對象額度">
          <Input.Group compact>
            <Input
              placeholder="0"
              disabled
              style={{ width: 80, textAlign: 'center' }}
            />
            <Input
              placeholder="0"
              style={{ width: 150, textAlign: 'center' }}
              addonBefore={<span onClick={handleCalculator}>{calculator}</span>}
              addonAfter="="
            />
            <Input
              placeholder="0"
              disabled
              style={{ width: 80, textAlign: 'center' }}
            />
          </Input.Group>
        </FormField>
        <FormField label="流水量">
          <Input />
        </FormField>
        <FormField label="備註">
          <Input.TextArea />
        </FormField>
        <FormField>
          <Alert
            message="派点"
            description="扣除您的「可用点数额」来派给对象「new01」 (PS: 必需有足够的可用点数)。"
            type="info"
            showIcon
          />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default PointFormPopup
