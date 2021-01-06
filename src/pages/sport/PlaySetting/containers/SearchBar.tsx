import { Form, Radio } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPlayId, setSectionId } from '../reducer'
import {
  selectPlayId,
  selectPlayOpts,
  selectSectionId,
  selectSectionOpts,
  useTypedSelector,
} from '../selectors'
import { useAPIService } from '../service'

interface SearchFormData {
  section_id: number
  play_id: number
}

const SearchBar: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const onSearch = async () => {
    const f = (await form.validateFields()) as SearchFormData
    dispatch(setSectionId(f.section_id))
    dispatch(setPlayId(f.play_id))
  }

  const sectionOpts = useTypedSelector(selectSectionOpts)
  const playOpts = useTypedSelector(selectPlayOpts)
  const play_id = useTypedSelector(selectPlayId)
  const section_id = useTypedSelector(selectSectionId)

  useEffect(() => {
    form?.setFieldsValue({
      section_id,
      play_id,
    })
  }, [play_id, section_id])

  if (!play_id || !section_id) return <></>

  return (
    <Form
      form={form}
      initialValues={{
        section_id,
        play_id,
      }}
      layout="inline"
      className="mb-1"
    >
      <Form.Item name="section_id">
        <Radio.Group
          options={sectionOpts}
          optionType="button"
          buttonStyle="solid"
          onChange={onSearch}
        />
      </Form.Item>
      <Form.Item name="play_id">
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
