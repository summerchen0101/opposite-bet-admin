import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Input, Select } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSecondSettingModal } from '../reducer'
import { selectDisplaySecondSettingModal, useTypedSelector } from '../selectors'
const { Option } = Select

const SecondSettingForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplaySecondSettingModal)
  const onCancel = () => {
    dispatch(toggleSecondSettingModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleSecondSettingModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <PopupModal
      visible={isDisplay}
      title="啟動頁秒數設置"
      onCancel={onCancel}
      width={300}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField required extra="可設定 1 ~ 30 內整數">
          <Input placeholder="3" suffix="秒" />
        </FormField>
        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            更新
          </Button>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default SecondSettingForm
