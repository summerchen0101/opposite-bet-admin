import Form, { FormField } from '@/components/Form'
import { Button, DatePicker, Form as AntForm, Input, Select, Space } from 'antd'
import React from 'react'

const { Option } = Select
const CreateForm: React.FC<{
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setVisible }) => {
  const [form] = AntForm.useForm()
  return (
    <>
      <Form
        onFinish={() => setVisible(false)}
        onFinishFailed={() => setVisible(false)}
      >
        <FormField label="請選擇隊伍(主)" name="mainTeam" required>
          <Input />
        </FormField>
        <FormField label="請選擇隊伍" name="clientTeam" required>
          <Input />
        </FormField>
        <FormField label="國家" name="country" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">巴西</Option>
            <Option value="opt2">美國</Option>
          </Select>
        </FormField>
        <FormField label="請選擇聯盟" name="league" required>
          <Input />
        </FormField>
        <FormField label="開賽時間" name="startAt" required>
          <DatePicker style={{ width: '100%' }} />
        </FormField>
        <FormField>
          <p>＊如果上面結果為撤銷則不用選擇</p>
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
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

export default CreateForm
