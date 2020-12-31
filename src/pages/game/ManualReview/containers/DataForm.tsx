import { IPBlockType, PlatformType } from '@/lib/enums'
import {
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  Row,
  Select,
  Switch,
} from 'antd'
import { FormInstance } from 'antd/lib/form'
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
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Descriptions bordered size="small" column={2}>
        <Descriptions.Item label="開賽時間">
          2020-12-30 09:11:20
        </Descriptions.Item>
        <Descriptions.Item label="帳務日期">2020-12-30</Descriptions.Item>
        <Descriptions.Item label="球種">美棒</Descriptions.Item>
        <Descriptions.Item label="聯盟">某個聯盟</Descriptions.Item>
        <Descriptions.Item label="主隊">主隊的名字</Descriptions.Item>
        <Descriptions.Item label="客隊">客隊的名字</Descriptions.Item>
      </Descriptions>
    </Form>
  )
}

export default DataForm
