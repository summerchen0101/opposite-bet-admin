import { IPBlockType, PlatformType } from '@/lib/enums'
import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
} from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment from 'moment'
import React, { useEffect } from 'react'
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

  const events = [{ label: '全場' }, { label: '半場' }]
  const scoreTypes = [
    { label: '主', count: 8 },
    { label: '和', count: 4 },
    { label: '客', count: 8 },
  ]

  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="球種">
            <Select />
          </Form.Item>
          <Form.Item label="聯盟">
            <Select />
          </Form.Item>
          <Form.Item label="主隊">
            <Select />
          </Form.Item>
          <Form.Item label="客隊">
            <Select />
          </Form.Item>
          <Form.Item label="開賽時間">
            <DatePicker defaultValue={moment()} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="帳務日期">
            <DatePicker
              defaultValue={moment()}
              disabled
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={18}>
          <Space>
            <Form.Item label="玩法">
              <Select style={{ width: '150px' }} />
            </Form.Item>
            <Form.Item label="場次">
              <Select style={{ width: '150px' }} />
            </Form.Item>
          </Space>
          <Row gutter={16}>
            {scoreTypes.map((s, s_i) => (
              <Col span={8} key={s_i}>
                <h3>{s.label}</h3>
                {[...Array(s.count)].map((c, c_i) => (
                  <Space key={c_i} className="mb-1">
                    <Checkbox checked />
                    <span>1-0</span>
                    <Form.Item className="mb-0">
                      <Input
                        style={{ width: '60px' }}
                        size="small"
                        defaultValue="7.5"
                      />
                    </Form.Item>
                    <Form.Item className="mb-0">
                      <Input
                        style={{ width: '100px' }}
                        size="small"
                        defaultValue="2133222"
                      />
                    </Form.Item>
                  </Space>
                ))}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
