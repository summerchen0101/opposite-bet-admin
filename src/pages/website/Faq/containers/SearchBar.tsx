import { Status } from '@/lib/enums'
import { statusOpts, yesNoOpts } from '@/lib/options'
import { Form, Input, Select } from 'antd'
import React from 'react'
import { useTypedSelector, selectCategoryList } from '../selectors'
import { useAPIService } from '../service'

interface SearchFormData {
  catalogue_id: number
  is_active: Status
}

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const { getTableData } = useAPIService()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      catalogue_id: f.catalogue_id,
      is_active: f.is_active,
    })
  }
  const categoryOpts = useTypedSelector(selectCategoryList).map((t) => ({
    label: t.name,
    value: t.id,
  }))
  return (
    <Form form={form} layout="inline" className="mb-2">
      <Form.Item name="catalogue_id" label="分類" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }, ...categoryOpts]}
          style={{ width: 130 }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="is_active" label="狀態" initialValue={0}>
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
