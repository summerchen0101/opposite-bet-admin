import { IPBlockType, Status } from '@/lib/enums'
import { IPBlockTypeOpts, statusOpts } from '@/lib/options'
import { DatePicker, Form, Input, Select } from 'antd'
import { Moment } from 'moment'
import React from 'react'
import { useAPIService } from '../service'

interface SearchFormData {
  name: string
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      name: f.name,
    })
  }
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="標籤名稱" name="name">
        <Input.Search onSearch={onSearch} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
