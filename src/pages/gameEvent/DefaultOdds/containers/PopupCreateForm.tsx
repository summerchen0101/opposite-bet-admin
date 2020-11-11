import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Radio,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { FormStaticText } from '@/components'
const { Option } = Select
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal visible={isDisplay} title="新增比分" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="比分" name="mainTeam" required>
          <Input />
        </FormField>
        <FormField label="利率" name="clientTeam" required>
          <Input />
        </FormField>
        <FormField label="可交易量" name="clientTeam" required>
          <Input />
        </FormField>
        <FormField label="類型" name="country" required>
          <Select placeholder="請選擇" allowClear defaultValue="opt1">
            <Option value="opt1">全場波膽</Option>
            <Option value="opt2">半場波膽</Option>
            <Option value="opt3">總進球數</Option>
          </Select>
        </FormField>
        <FormField label="是否穩賺" name="league" required>
          <Radio.Group defaultValue={0}>
            <Radio value={0}>不設置</Radio>
            <Radio value={1}>設置</Radio>
          </Radio.Group>
        </FormField>
        <FormField wrapperCol={{ offset: 0 }}>
          <FormStaticText withStartIcon>
            ＊只要買這個比分就穩贏，只有全場波膽分類才算，這個比分也會限制最多買1000。
          </FormStaticText>
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
