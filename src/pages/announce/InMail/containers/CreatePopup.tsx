import { ContentEditor } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { LevelCode } from '@/lib/enums'
import { Input, Radio, Select } from 'antd'
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
        <FormField
          label="收件人身份"
          name="targetLevel"
          initialValue={LevelCode.Member}
        >
          <Radio.Group>
            <Radio value={LevelCode.Member}>會員</Radio>
            <Radio value={LevelCode.Agent}>代理</Radio>
          </Radio.Group>
        </FormField>
        <FormField label="收件人帳號" name="targetAccounts">
          <Select
            mode="tags"
            tokenSeparators={[',']}
            placeholder="全部帳號"
            allowClear
          />
        </FormField>
        <FormField label="標題" name="title">
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
