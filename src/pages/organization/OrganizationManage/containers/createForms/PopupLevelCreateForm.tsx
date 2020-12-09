import { PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Protocal } from '@/lib/enums'
import {
  Button,
  Col,
  Form as AntForm,
  Input,
  Radio,
  Row,
  Select,
  Space,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleLevelCreateModal, togglePercentageModal } from '../../reducer'
import {
  selectDisplayLevelCreateModal,
  useTypedSelector,
} from '../../selectors'
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayLevelCreateModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleLevelCreateModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleLevelCreateModal(false))
    dispatch(togglePercentageModal(true))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const statusOpts = [
    { label: '啟用', value: 1 },
    { label: '停用', value: 0 },
  ]
  const roleTypeOpts = [
    { label: '子帳號', value: 'sub' },
    { label: '代理', value: 'normal' },
    { label: '測試代理', value: 'testing' },
  ]
  const accOpts = ['fwrwe', 'afwefwe', 'aaaae33']
  return (
    <PopupModal
      visible={isDisplay}
      title="新增成員"
      onCancel={onCancel}
      width={600}
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="帳號角色" name="roleType" initialValue="normal">
              <Radio.Group options={roleTypeOpts} />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="組織層級">
              <div>{'aaa[AA] > bbb[BB] > ccc[CC]'}</div>
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="會員帳號" initialValue="fwrwe">
              <Select options={accOpts.map((t) => ({ label: t, value: t }))} />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="會員名稱">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="密碼">
              <Input.Password />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="確認密碼">
              <Input.Password />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="狀態" initialValue={1}>
              <Radio.Group options={statusOpts} />
            </FormField>
          </Col>
        </Row>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button htmlType="reset" onClick={onReset}>
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              儲存，前往占成设定
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
