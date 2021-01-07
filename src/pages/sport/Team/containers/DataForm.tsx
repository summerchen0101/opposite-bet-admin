import { Form, Input, Radio, Select } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
import {
  selectGameOpts,
  selectLeagueOpts,
  useTypedSelector,
} from '../selectors'
import { useAPIService } from '../service'

export interface FormData {
  id?: number
  name: string
  name_en: string
  note: string
  game_id: number
  league_id: number
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  const { getLeagueOptions } = useAPIService()
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  const onReset = () => form.resetFields()

  const statusOpts = [
    { label: '啟用', value: true },
    { label: '停用', value: false },
  ]
  const gameOpts = useTypedSelector(selectGameOpts)
  const leagueOpts = useTypedSelector(selectLeagueOpts)

  return (
    <Form
      layout="vertical"
      form={form}
      onReset={onReset}
      initialValues={values}
    >
      <Form.Item label="球種" name="game_id" rules={[{ required: true }]}>
        <Select
          options={gameOpts}
          placeholder="請選擇"
          onChange={getLeagueOptions}
          disabled={!!values.id}
        />
      </Form.Item>
      <Form.Item label="聯盟" name="league_id" rules={[{ required: true }]}>
        <Select
          options={leagueOpts}
          placeholder="請選擇"
          disabled={!!values.id}
        />
      </Form.Item>
      <Form.Item
        label="名稱"
        name="name"
        rules={[{ required: true }, { max: 30 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="英文名稱"
        name="name_en"
        rules={[{ required: true }, { max: 30 }]}
      >
        <Input disabled={!!values.id} />
      </Form.Item>
      <Form.Item label="備註" name="note" rules={[{ max: 30 }]}>
        <Input />
      </Form.Item>
      <Form.Item label="狀態" name="is_active">
        <Radio.Group options={statusOpts} />
      </Form.Item>
    </Form>
  )
}

export default DataForm
