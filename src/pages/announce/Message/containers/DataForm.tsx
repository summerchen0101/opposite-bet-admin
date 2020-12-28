import { PureContentEditor } from '@/components'
import { LevelCode } from '@/lib/enums'
import { Form, Input, Radio, Select } from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment, { Moment } from 'moment'
import React, { useEffect } from 'react'
import { MessageType, CreateMessage } from '../API/types'

export type FormData = CreateMessage
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])

  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item
        label="收件人身份"
        name="member_type"
        initialValue={MessageType.Member}
      >
        <Radio.Group>
          <Radio value={MessageType.Member}>會員</Radio>
          <Radio value={MessageType.Agent}>代理</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="收件人帳號" name="receivers">
        <Select
          mode="tags"
          tokenSeparators={[',']}
          placeholder="全部帳號"
          allowClear
        />
      </Form.Item>
      <Form.Item label="標題" name="title">
        <Input />
      </Form.Item>

      <Form.Item name="content">
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default DataForm
