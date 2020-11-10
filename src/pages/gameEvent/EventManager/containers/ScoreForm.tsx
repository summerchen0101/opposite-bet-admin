import Form, { FormField } from '@/components/Form'
import { Button, Form as AntForm, Input, Select, Space } from 'antd'
import React from 'react'
const { Option } = Select
const ScoreForm: React.FC<{
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setVisible }) => {
  const [form] = AntForm.useForm()
  return (
    <>
      <Form
        onFinish={() => setVisible(false)}
        onFinishFailed={() => setVisible(false)}
      >
        <FormField label="總結果" name="result" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">比賽已完成</Option>
            <Option value="opt2">比賽已撤銷</Option>
          </Select>
        </FormField>
        <FormField label="全場波膽" name="full" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">3:1</Option>
            <Option value="opt2">3:2</Option>
          </Select>
        </FormField>
        <FormField label="上半場波膽" name="firstHalf" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">3:1</Option>
            <Option value="opt2">3:2</Option>
          </Select>
        </FormField>
        <FormField label="進球總數" name="total" required>
          <Input type="number" />
        </FormField>
        <FormField>
          <p>＊如果上面結果為撤銷則不用選擇</p>
        </FormField>

        <FormField style={{ textAlign: 'right' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={() => setVisible(false)} htmlType="reset">
              取消
            </Button>
          </Space>
        </FormField>
      </Form>
    </>
  )
}

export default ScoreForm
