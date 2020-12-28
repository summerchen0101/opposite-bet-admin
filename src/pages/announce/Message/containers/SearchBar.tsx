import { Form, Input, Radio } from 'antd'
import React from 'react'
import { MessageType, SearchFields } from '../API/types'
import { useAPIService } from '../service'

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFields
    await getTableData({
      title: f.title,
      member_type: f.member_type,
    })
  }
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="標題" name="title">
        <Input.Search onSearch={onSearch} allowClear />
      </Form.Item>
      <Form.Item label="發送對象" name="member_type" initialValue={0}>
        <Radio.Group onChange={onSearch}>
          <Radio value={0}>全部</Radio>
          <Radio value={MessageType.Member}>會員</Radio>
          <Radio value={MessageType.Agent}>代理</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}

export default SearchBar
