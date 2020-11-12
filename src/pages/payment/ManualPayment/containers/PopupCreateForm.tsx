import PopupModal from '@/components/PopupModal'
import { Button, DatePicker, Input, Select, Space, Form as AntForm } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
const { Option } = Select
const tradeOptions = [
  { label: '全部', value: 'all' },
  { label: '存入-手動入款', value: 'opt1' },
  { label: '存入-人工存入', value: 'opt2' },
  { label: '存入-存款優惠', value: 'opt3' },
  { label: '存入-負數額度歸零', value: 'opt4' },
  { label: '存入-取消出款', value: 'opt5' },
  { label: '存入-其他', value: 'opt6' },
  { label: '存入-反點優惠', value: 'opt7' },
  { label: '存入-活動優惠', value: 'opt8' },
  { label: '存入-入款補存', value: 'opt9' },
  { label: '提出-重複出款', value: 'opt10' },
  { label: '提出-公司入款誤存', value: 'opt11' },
  { label: '提出-手動申請出款', value: 'opt12' },
  { label: '提出-其他', value: 'opt13' },
]
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
    <PopupModal visible={isDisplay} title="新增 - 人工存取" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="會員帳號" name="account" required>
          <Input />
        </FormField>
        <FormField label="平台" name="platform" required>
          <Input />
        </FormField>
        <FormField label="類型" name="type" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">存入</Option>
            <Option value="opt2">提出</Option>
          </Select>
        </FormField>
        <FormField label="存提項目" name="trade" required>
          <Select placeholder="請選擇" allowClear options={tradeOptions} />
        </FormField>
        <FormField label="金額" name="point" required>
          <Input />
        </FormField>
        <FormField label="備註" name="notes">
          <Input.TextArea />
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
