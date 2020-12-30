import { IPBlockType, PlatformType, YesNo } from '@/lib/enums'
import { IPBlockTypeOpts, platformTypeOpts, yesNoOpts } from '@/lib/options'
import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
  Switch,
} from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment from 'moment'
import React, { useEffect } from 'react'
import {
  selectPlayOpts,
  selectSectionOpts,
  useTypedSelector,
} from '../selectors'
export interface FormData {
  id?: number
  block_type: IPBlockType
  platform_type: PlatformType
  ip: string
  note: string
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
  const sectionOpts = useTypedSelector(selectSectionOpts)
  const playOpts = useTypedSelector(selectPlayOpts)
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item label="場次">
        <Select options={sectionOpts} />
      </Form.Item>
      <Form.Item label="玩法">
        <Select options={playOpts} />
      </Form.Item>
      <Form.Item label="自動結帳" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  )
}

export default DataForm
