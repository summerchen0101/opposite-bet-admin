import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { ipStatusOpts } from '@/lib/options'
import { Col, Input, Radio, Row, Select, Switch } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'

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
  const platformOpts = [
    { label: '全部', value: 0 },
    { label: '代理端', value: 1 },
    { label: '會員端', value: 2 },
  ]
  const areaOpts = [
    { label: '美國', value: 1 },
    { label: '中國', value: 2 },
    { label: '日本', value: 3 },
  ]
  return (
    <PopupModal visible={isDisplay} title="新增黑名單國家" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="國別" name="area" initialValue={1}>
          <Select options={areaOpts} />
        </FormField>
        <Row gutter={16}>
          <Col span={8}>
            <FormField
              label="狀態"
              name="is_active"
              valuePropName="checked"
              initialValue={true}
            >
              <Switch />
            </FormField>
          </Col>
          <Col span={16}>
            <FormField label="端口設置" name="platform" initialValue={0}>
              <Radio.Group options={platformOpts} />
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

export default CreateForm
