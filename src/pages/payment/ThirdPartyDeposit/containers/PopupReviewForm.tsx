import { FormStaticText } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Input, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleReviewModal } from '../reducer'
import { selectDisplayReviewModal, useTypedSelector } from '../selectors'
const { Option } = Select
const ReviewForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayReviewModal)
  const onCancel = () => {
    dispatch(toggleReviewModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleReviewModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  return (
    <PopupModal
      visible={isDisplay}
      title="gogoro 手動 - 第三方金流"
      onCancel={onCancel}
    >
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="horizontal"
        labelAlign="left"
        {...layout}
      >
        <FormField label="會員名稱">
          <FormStaticText>gogoro</FormStaticText>
        </FormField>
        <FormField label="單號">
          <FormStaticText>2020091517395623</FormStaticText>
        </FormField>
        <FormField label="存入金額">
          <h3 style={{ margin: 0 }}>3,000</h3>
        </FormField>
        <FormField label="金流單號">
          <Input placeholder="請輸入" />
        </FormField>
        <FormField label="備註">
          <Input.TextArea />
        </FormField>

        <FormField
          style={{ marginTop: '20px', textAlign: 'center' }}
          wrapperCol={{ offset: 0, span: 24 }}
        >
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

export default ReviewForm
