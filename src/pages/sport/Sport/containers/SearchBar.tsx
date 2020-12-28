import { Status } from '@/lib/enums'
import { statusOpts } from '@/lib/options'
import { Form, Select } from 'antd'
import React from 'react'
import { selectCountryOpts, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'

interface SearchFormData {
  country_id: number
  // is_active: Status
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      country_id: f.country_id,
      // is_active: f.is_active,
    })
  }
  // const countryOpts = useTypedSelector(selectCountryOpts)
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="國家" name="country_id" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }]}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item>
      {/* <Form.Item label="狀態" name="is_active" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item> */}
    </Form>
  )
}

export default SearchBar
