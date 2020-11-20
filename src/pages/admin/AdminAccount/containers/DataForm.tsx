import { BasicSelector, Text } from '@/components'
import Form, { FormField } from '@/components/Form'
import { DataDataFormProps } from '@/lib/types'
import {
  Button,
  Col,
  DatePicker,
  Form as AntForm,
  Input,
  InputNumber,
  Radio,
  Row,
  Space,
} from 'antd'
import moment from 'moment'
import React from 'react'
import { selectRoleOptions, useTypedSelector } from '../selectors'

const DataForm: React.FC<DataDataFormProps> = ({
  values,
  onFinish,
  onFinishFailed,
}) => {
  const [form] = AntForm.useForm()
  const onReset = () => {
    form.resetFields()
  }
  const disabledDate = (current) => {
    return current && current < moment().endOf('day')
  }
  const roleOptions = useTypedSelector(selectRoleOptions)
  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={values}
      form={form}
    >
      <Row gutter={16}>
        <Col span={12}>
          <FormField label="管理者帳號" name="account" required>
            <Input />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="真實姓名" name="realName" required>
            <Input />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="密碼" name="pw" required>
            <Input.Password />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="確認密碼" name="pw_confirm" required>
            <Input.Password />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="電子郵箱" name="email" required>
            <Input />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="角色" name="role" required>
            <BasicSelector
              options={roleOptions}
              placeholder="請選擇"
              width="100%"
            />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="單筆提款審核上限" name="singleLimit" required>
            {/* <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              style={{ width: '100%' }}
            /> */}
            <Input itemType="number" allowClear />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="每日提款審核上限" name="dailyLimit" required>
            {/* <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              style={{ width: '100%' }}
            /> */}
            <Input itemType="number" allowClear />
          </FormField>
        </Col>
      </Row>

      <FormField
        label="帳號有效時間"
        required
        name="effectiveTime"
        extra={<Text color="danger">(时间到会自动停用)</Text>}
      >
        <Radio.Group>
          <Radio value="limit">
            <Space>
              <span>時間：</span>
              <FormField name="limitDate">
                <DatePicker disabledDate={disabledDate} />
              </FormField>
            </Space>
          </Radio>
          <Radio value="forever">永久</Radio>
        </Radio.Group>
      </FormField>

      <Row gutter={16}>
        <Col span={12}>
          <FormField
            label="允許登入IP"
            name="ip"
            extra={<Text color="danger">(多IP請逗號分隔，空白=不限制)</Text>}
          >
            <Input />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="狀態" name="status">
            <Radio.Group>
              <Radio value={1}>啟用</Radio>
              <Radio value={0}>關閉</Radio>
            </Radio.Group>
          </FormField>
        </Col>
      </Row>

      <FormField label="備註" name="notes">
        <Input.TextArea />
      </FormField>

      <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
        <Space size="large">
          <Button htmlType="reset" onClick={onReset}>
            重置
          </Button>
          <Button type="primary" htmlType="submit">
            送出
          </Button>
        </Space>
      </FormField>
    </Form>
  )
}

export default DataForm
