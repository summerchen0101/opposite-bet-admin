import { statusOpts } from '@/lib/options'
import { Form, Select } from 'antd'
import React from 'react'
import {
  selectCountryOpts,
  selectSportOpts,
  useTypedSelector,
} from '../selectors'
import { useAPIService } from '../service'

interface SearchFormData {
  country_id: number
  sport_id: number
}

const SearchBar: React.FC = () => {
  const { getTableData } = useAPIService()
  const [form] = Form.useForm()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    await getTableData({
      country_id: f.country_id,
      sport_id: f.sport_id,
    })
  }
  const countryOpts = useTypedSelector(selectCountryOpts)
  const sportOpts = useTypedSelector(selectSportOpts)
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item label="國家" name="country_id" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }, ...countryOpts]}
          style={{ width: '130px' }}
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item label="體育" name="sport_id" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }, ...sportOpts]}
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
