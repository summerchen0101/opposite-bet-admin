import { ContentEditor, FormStaticText } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Col, Input, Radio, Row, Select, Space, Tabs } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const { Option } = Select
const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const onCancel = () => {
    setVisible(false)
  }
  const options = [
    { label: 'aabbb', value: 'aabbb' },
    { label: 'cccc', value: 'cccc' },
  ]
  return (
    <PopupModal
      visible={visible}
      title="新增站內信"
      onCancel={onCancel}
      width={700}
    >
      <Form>
        <FormField label="收件人身份">
          <Radio.Group defaultValue="opt1">
            <Radio value="opt1">會員</Radio>
            <Radio value="opt2">代理</Radio>
          </Radio.Group>
        </FormField>
        <FormField label="帳號">
          <Select
            mode="multiple"
            allowClear
            options={options}
            defaultValue={['aabbb']}
          />
        </FormField>
        <FormField label="標題">
          <Input />
        </FormField>
        <FormField>
          <ContentEditor />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreatePopup
