import { DateRangePicker, ImageUpload } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import {
  Button,
  Col,
  Collapse,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Tabs,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
const { Option } = Select
const extraButton = (
  <Button size="small" onClick={(e) => e.stopPropagation()}>
    預覽
  </Button>
)
const panelContent = (
  <>
    <FormField
      label="超連結"
      required
      extra="請輸入完整的網路連結(含: http:// 或 https://)"
    >
      <Input />
    </FormField>
    <FormField label="連結方式" required initialValue="opt1">
      <Radio.Group>
        <Radio value="opt1">同頁</Radio>
        <Radio value="opt2">另開分頁</Radio>
      </Radio.Group>
    </FormField>
    <FormField>
      <ImageUpload />
    </FormField>
  </>
)
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
    <PopupModal visible={isDisplay} title="新增廣告橫幅" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row gutter={16}>
          <Col span={12}>
            <FormField label="標題" name="mainTeam" required>
              <Input />
            </FormField>
          </Col>
          <Col span={12}>
            <FormField label="廣告期間" name="clientTeam" required>
              <DateRangePicker />
            </FormField>
          </Col>
        </Row>
        <FormField label="平台顯示" name="country" required initialValue="opt1">
          <Radio.Group>
            <Radio value="opt1">全部</Radio>
            <Radio value="opt2">手機</Radio>
            <Radio value="opt3">桌上型電腦</Radio>
          </Radio.Group>
        </FormField>
        <h3>廣告圖片上傳</h3>
        <Tabs defaultActiveKey="cn" type="card" size="small">
          <Tabs.TabPane tab="簡中" key="cn">
            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel header="桌上型電腦" key="1" extra={extraButton}>
                {panelContent}
              </Collapse.Panel>
              <Collapse.Panel header="手機" key="2" extra={extraButton}>
                {panelContent}
              </Collapse.Panel>
            </Collapse>
          </Tabs.TabPane>
        </Tabs>

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
