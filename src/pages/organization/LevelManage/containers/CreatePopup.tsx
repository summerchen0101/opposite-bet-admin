import { PopupModal } from '@/components'
import { LevelCode } from '@/lib/enums'
import { getLevelName } from '@/utils/transfer'
import { Modal, Form, Button } from 'antd'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import { usePopupProvider } from '../context/PopupProvider'
import CreateForm from './CreateForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const [percentFormVisible, setPercentFormVisible] = usePopupProvider(
    'percentForm',
  )
  const { currentLevel } = useLevelProvider()
  const [form] = Form.useForm()
  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    setVisible(false)
    if (currentLevel !== LevelCode.Vendor) {
      setPercentFormVisible(true)
    }
  }
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      form.resetFields()
      onCreate(values)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  return (
    <PopupModal
      title={<>新增{getLevelName(currentLevel)}</>}
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={[
        <Button key="reset" onClick={() => form.resetFields()}>
          重置
        </Button>,
        <Button key="vendorSubmit" type="primary" onClick={handleSubmit}>
          {currentLevel === LevelCode.Vendor ? '送出' : '儲存，前往占成设定'}
        </Button>,
      ]}
    >
      <CreateForm form={form} />
    </PopupModal>
  )
}

export default CreatePopup
