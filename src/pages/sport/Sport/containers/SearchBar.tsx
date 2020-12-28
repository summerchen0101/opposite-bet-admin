import { Status } from '@/lib/enums'
import { statusOpts } from '@/lib/options'
import { selectCountryOpts, useTypedSelector } from '../selectors'
import { DatePicker, Form, Input, Select } from 'antd'
import { Moment } from 'moment'
import React from 'react'
import { useAPIService } from '../service'
import { remoteOptsToLocalOpts } from '@/utils/transfer'

interface SearchFormData {
  country_id: number
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      country_id: f.country_id,
    })
  }
  const countryOpts = useTypedSelector(selectCountryOpts)
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="國家" name="country_id" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }, ...countryOpts]}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item label="狀態" name="is_active" initialValue={0}>
        <Select
          options={statusOpts}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
