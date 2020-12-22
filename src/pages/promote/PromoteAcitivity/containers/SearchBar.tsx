import { ProcessStatus } from '@/lib/enums'
import { statusOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
import React from 'react'
import { SearchFields } from '../API/types'
import { useAPIService } from '../service'

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const { getTableData } = useAPIService()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFields
    await getTableData(f)
  }
  const processOpts = [
    { label: '全部', value: 0 },
    { label: '未開始', value: ProcessStatus.Pending },
    { label: '進行中', value: ProcessStatus.Running },
    { label: '已過期', value: ProcessStatus.Finish },
  ]
  return (
    <Form form={form} layout="inline" className="mb-2">
      <Form.Item name="title" label="活動名稱">
        <Input.Search
          placeholder="請輸入內容"
          onSearch={onSearch}
          allowClear
          style={{ width: 180 }}
        />
      </Form.Item>
      <Form.Item name="is_active" label="啟用狀態" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="process_status" label="期間狀態" initialValue={0}>
        <Select
          options={processOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
