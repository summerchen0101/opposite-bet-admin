import { PopupModal } from '@/components'
import { Button, Form, Input, Switch } from 'antd'
import React, { useEffect } from 'react'
import { CreateCountry } from '../../API/types'
import { useDataProvider } from '../../context/DataProvider'
import { usePopupProvider } from '../../context/PopupProvider'
import { useAPIService } from '../../service/country'
import AreaDataForm from './AreaDataForm'
import { FormData } from './AreaDataForm'

const AreaFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('editCountry')
  const { onEdit } = useAPIService()
  const [form] = Form.useForm()
  const [view] = useDataProvider().view
  if (!view) return <></>

  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as FormData
      console.log('Received values of form: ', values)
      onEdit({
        id: view.id,
        ...values,
      })
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }

  const handleCancel = () => {
    form.resetFields()
    setVisible(false)
  }

  return (
    <PopupModal
      visible={visible}
      title="編輯地區"
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      width={360}
      zIndex={2}
    >
      <AreaDataForm form={form} values={view} />
    </PopupModal>
  )
}

export default AreaFormPopup
