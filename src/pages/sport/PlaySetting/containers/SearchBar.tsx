import { playOpts, sectionOpts } from '@/lib/options'
import { Form, Radio } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPlayCode, setSectionCode } from '../reducer'
import {
  selectPlayCode,
  selectSectionCode,
  useTypedSelector,
} from '../selectors'
import { useAPIService } from '../service'

interface SearchFormData {
  section_code: string
  play_code: string
}

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    dispatch(setSectionCode(f.section_code))
    dispatch(setPlayCode(f.play_code))
  }

  const play_code = useTypedSelector(selectPlayCode)
  const section_code = useTypedSelector(selectSectionCode)

  useEffect(() => {
    form?.setFieldsValue({
      section_code,
      play_code,
    })
  }, [play_code, section_code])

  if (!play_code || !section_code) return <></>

  return (
    <Form
      form={form}
      initialValues={{
        section_code,
        play_code,
      }}
      layout="inline"
      className="mb-1"
    >
      <Form.Item name="section_code">
        <Radio.Group
          options={sectionOpts}
          optionType="button"
          buttonStyle="solid"
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="play_code">
        <Radio.Group
          options={playOpts}
          optionType="button"
          buttonStyle="solid"
          onChange={onSearch}
        />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
