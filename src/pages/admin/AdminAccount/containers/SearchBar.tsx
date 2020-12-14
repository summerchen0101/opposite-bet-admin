import { Form, Input, Select } from 'antd'
import React from 'react'

const statusOptions = [
  { label: '全部', value: 'all' },
  { label: '未啟動', value: 0 },
  { label: '啟動', value: 1 },
  { label: '停用', value: 2 },
  { label: '凍結', value: 3 },
]
const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const onFormChanged = (e) => {
    console.log('onFormChanged')
    form.submit()
  }
  const onFinished = (values) => {
    console.log('onFinished')
  }
  const roleOptions = [
    { label: '全部', value: 'all' },
    { label: '財務管理員', value: 'opt1' },
    { label: '對帳管理員', value: 'opt2' },
    { label: '行銷管理員', value: 'opt3' },
  ]
  return (
    <Form form={form} layout="inline" onFinish={onFinished} className="mb-2">
      <Form.Item name="account" label="管理者帳號">
        <Input.Search
          placeholder="請輸入內容"
          onSearch={onFormChanged}
          allowClear
        />
      </Form.Item>
      <Form.Item name="role" label="管理者角色" initialValue="all">
        <Select
          options={roleOptions}
          placeholder="全部角色"
          style={{ width: 150 }}
          onChange={onFormChanged}
          allowClear
        />
      </Form.Item>
      <Form.Item name="status" label="狀態" initialValue="all">
        <Select
          options={statusOptions}
          style={{ width: 150 }}
          onChange={onFormChanged}
          allowClear
        />
      </Form.Item>
      <Form.Item name="ip" label="允許登入IP">
        <Input.Search
          placeholder="請輸入內容"
          onSearch={onFormChanged}
          allowClear
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
