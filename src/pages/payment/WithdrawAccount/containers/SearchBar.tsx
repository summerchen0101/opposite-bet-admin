import { IPBlockType, Status } from '@/lib/enums'
import { Form } from 'antd'
import React from 'react'
import { useAPIService } from '../service'

interface SearchFormData {
  ip: string
  block_type: IPBlockType
  is_active: Status
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      ip: f.ip,
      block_type: f.block_type,
      is_active: f.is_active,
    })
  }
  return <Form form={form} layout="inline" className="mb-1"></Form>
}

export default SearchBar
