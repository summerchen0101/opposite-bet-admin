import PopupModal from '@/components/PopupModal'
import { Button, DatePicker, Input, Select, Space, Form as AntForm } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
const { Option } = Select
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
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
    <PopupModal visible={isDisplay} title="新增賽事" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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

        <FormField style={{ textAlign: 'right' }}>
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
