import { IPBlockType, Status } from '@/lib/enums'
import { Form, Radio, Select } from 'antd'
import React from 'react'
import {
  selectPlayOpts,
  selectSectionOpts,
  useTypedSelector,
} from '../selectors'
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
  const sectionOpts = useTypedSelector(selectSectionOpts)
  const playOpts = useTypedSelector(selectPlayOpts)
  if (sectionOpts.length === 0 || playOpts.length === 0) return <></>
  return (
    <Form form={form} layout="inline" className="mb-1">
      <Form.Item name="section_id" initialValue={sectionOpts[0].value}>
        <Select options={sectionOpts} style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item name="play_id" initialValue={playOpts[0].value}>
        <Select options={playOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
