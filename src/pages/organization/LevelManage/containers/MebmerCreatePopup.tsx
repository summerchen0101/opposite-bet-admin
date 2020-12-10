import { FormField, PopupModal } from '@/components'
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const MemberCreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('memberCreateForm')
  const [form] = Form.useForm()
  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    setVisible(false)
  }
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      form.resetFields()
      onCreate(values)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  const { Panel } = Collapse
  const accOpts = [...Array(5)].map((t, i) => 'abbcc' + i)
  return (
    <PopupModal
      title="新增會員"
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={[
        <Button key="reset" onClick={() => form.resetFields()}>
          重置
        </Button>,
        <Button key="vendorSubmit" type="primary" onClick={handleSubmit}>
          送出
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="廠商">
              <Input disabled placeholder="abb" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="上層代理">
              <Input disabled placeholder="haap" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField
              label="會員帳號"
              name="account"
              initialValue={accOpts[0]}
            >
              <Select
                options={accOpts.map((t, i) => ({ label: t, value: t }))}
              />
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
            <FormField label="單注下限">
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="單注">
              <Input addonBefore="上层 15,000" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="單場(萬)">
              <Input addonBefore="上层 1,000" />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="手機號碼">
              <Input addonBefore="+86" />
            </FormField>
          </Col>
          <Col span={24}>
            <FormField label="備註">
              <Input.TextArea />
            </FormField>
          </Col>
        </Row>
        <Collapse ghost style={{ margin: '0 -15px' }}>
          <Panel header="其他資料" key="1">
            <Row gutter={16}>
              <Col span={12}>
                <FormField label="電子郵箱">
                  <Input />
                </FormField>
              </Col>
              <Col span={12}>
                <FormField label="生日">
                  <DatePicker style={{ width: '100%' }} />
                </FormField>
              </Col>
              <Col span={12}>
                <FormField label="微信">
                  <Input />
                </FormField>
              </Col>
              <Col span={12}>
                <FormField label="QQ">
                  <Input />
                </FormField>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Form>
    </PopupModal>
  )
}

export default MemberCreatePopup
