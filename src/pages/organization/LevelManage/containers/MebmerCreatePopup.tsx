import { FormField, PopupModal } from '@/components'
import { localizeMessage } from '@/utils/transfer'
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
} from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const MemberCreatePopup: React.FC = () => {
  const [createVisible, setCreateVisible] = usePopupProvider('memberCreateForm')
  const [editVisible, setEditVisible] = usePopupProvider('memberEditForm')
  const [, setPointFormVisible] = usePopupProvider('pointForm')
  const [, setBankCardVisible] = usePopupProvider('bankCardList')
  const currentType = createVisible ? 'create' : 'edit'

  const tagOpts = [
    { label: '危險客戶', value: 1 },
    { label: '打水', value: 2 },
    { label: '某某標籤', value: 3 },
  ]

  const [form] = Form.useForm()
  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    setCreateVisible(false)
  }
  const onEdit = (values) => {
    console.log('Received values of form: ', values)
    setEditVisible(false)
  }
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      form.resetFields()
      if (currentType === 'create') {
        onCreate(values)
      } else {
        onEdit(values)
      }
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  const { Panel } = Collapse
  const accOpts = [...Array(5)].map((t, i) => 'abbcc' + i)
  const allowOpts = [
    { label: '是', value: 'yes' },
    { label: '否', value: 'no' },
  ]
  return (
    <PopupModal
      title={
        <div>
          <span>{localizeMessage(`form.${currentType}`)}會員</span>
          {currentType === 'edit' && (
            <Space className="float-right mr-3">
              <Button size="small" onClick={() => setPointFormVisible(true)}>
                調節金額
              </Button>
              <Button size="small" onClick={() => setBankCardVisible(true)}>
                銀行卡
              </Button>
            </Space>
          )}
        </div>
      }
      visible={createVisible || editVisible}
      onCancel={() => {
        setCreateVisible(false)
        setEditVisible(false)
      }}
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
            <FormField label="上層代理">
              <Input readOnly value="haap123" />
            </FormField>
          </Col>
          <Col span={12} />
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
          {currentType === 'create' && (
            <>
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
            </>
          )}
          <Col span={24}>
            <FormField label="標籤">
              <Select mode="multiple" options={tagOpts} />
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
          {currentType === 'edit' && (
            <>
              <Col span={12}>
                <FormField
                  label="允許登入"
                  name="allowLogin"
                  initialValue="yes"
                >
                  <Radio.Group options={allowOpts} />
                </FormField>
              </Col>
              <Col span={12}>
                <FormField
                  label="允許投注"
                  name="allowBetting"
                  initialValue="yes"
                >
                  <Radio.Group options={allowOpts} />
                </FormField>
              </Col>
            </>
          )}
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
