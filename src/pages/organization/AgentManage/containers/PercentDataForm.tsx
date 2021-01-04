import { PopupTable } from '@/components'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { IPBlockTypeOpts, platformTypeOpts } from '@/lib/options'
import {
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Switch,
  Table,
} from 'antd'
import { FormInstance } from 'antd/lib/form'
import { ColumnsType } from 'antd/lib/table'
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
const PercentDataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  const columns: ColumnsType<{ id: number; name: string }> = [
    { title: '足球', render: (_, row) => row.name, width: 80 },
    { title: '全場反波膽', render: (_, row) => <Input /> },
    { title: '半場反波膽', render: (_, row) => <Input /> },
    {
      title: '快速設定',
      render: (_, row) => (
        <Input style={{ background: '#ebe9e9' }} placeholder="快速設定" />
      ),
    },
  ]
  const data = [
    { id: 1, name: '返水' },
    { id: 2, name: '單注(萬)' },
    { id: 3, name: '單場(萬)' },
    { id: 4, name: '單邊(萬)' },
  ]
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="足球佔成比">
            <Input addonAfter="%" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="單注下限">
            <Input />
          </Form.Item>
        </Col>
        {/* <Col span={24}>
          <Form.Item label="返水">
            <Input />
          </Form.Item>
        </Col> */}
      </Row>
      <Form.Item help="說明：如果「返水」為 100，表示每下注一萬元可以得到返水 100 元">
        <PopupTable data={data} columns={columns} pagination={false} />
      </Form.Item>
    </Form>
  )
}

export default PercentDataForm
