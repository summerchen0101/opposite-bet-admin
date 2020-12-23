import { PureContentEditor } from '@/components'
import { LevelCode } from '@/lib/enums'
import { Form, Input, Radio, Select } from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment, { Moment } from 'moment'
import React, { useEffect } from 'react'
import { NewsType } from '../API/types'
export interface FormData {
  id?: number
  title: string
  content: string
  date_range: [Moment, Moment]
  news_type: NewsType
  is_active: boolean
}
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
        name="targetLevel"
        initialValue={LevelCode.Member}
      >
        <Radio.Group>
          <Radio value={LevelCode.Member}>會員</Radio>
          <Radio value={LevelCode.Agent}>代理</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="收件人帳號" name="targetAccounts">
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

      <Form.Item>
        <PureContentEditor />
      </Form.Item>
    </Form>
  )
}

export default DataForm
