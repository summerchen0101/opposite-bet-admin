import { Status } from '@/lib/enums'
import { statusOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
import React from 'react'
import { BlockStatus, SearchFields } from '../API/types'
import { selectRoleOpts, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

interface SearchForm {
  acc: string
  role_id: number
  status: BlockStatus
  is_active: Status
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm<SearchForm>()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchForm
    await getTableData({
      acc: f.acc,
      is_active: f.is_active,
      status: f.status,
      role_id: f.role_id,
    })
  }
  const roleOpts = useTypedSelector(selectRoleOpts)
  return (
    <Form form={form} layout="inline" className="mb-2">
      <Form.Item name="acc" label="管理者帳號">
        <Input.Search placeholder="請輸入內容" onSearch={onSearch} allowClear />
      </Form.Item>
      <Form.Item name="role_id" label="管理者角色" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }, ...roleOpts]}
          placeholder="全部角色"
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="status" label="鎖定狀態" initialValue={0}>
        <Select
          options={[
            { label: '全部', value: 0 },
            { label: '正常', value: BlockStatus.Normal },
            { label: '鎖定', value: BlockStatus.Blocked },
          ]}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="is_active" label="啟用狀態" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
