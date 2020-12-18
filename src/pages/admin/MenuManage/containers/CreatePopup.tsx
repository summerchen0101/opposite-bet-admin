import PopupModal from '@/components/PopupModal'
import { Status } from '@/lib/enums'
import { Form } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { usePopupProvider } from '../context/PopupProvider'
import { setEditId } from '../reducer'
import { selectEditId, useTypedSelector } from '../selectors'
import { useAPIService } from '../service'
import DataForm, { MenuFormData } from './DataForm'

const CreatePopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
  const dispatch = useDispatch()
  const parentId = useTypedSelector(selectEditId)
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<MenuFormData>()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as MenuFormData
      await onCreate({
        ...values,
        is_active: values.is_active === Status.ON,
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
    dispatch(setEditId(null))
  }
  return (
    <PopupModal
      visible={visible}
      title="新增選單"
      // title={parentId ? <>新增[{parent.name}]下層選單</> : '新增選單'}
      // title={<>新增選單 {parentId && <ColorText>{parent.name}</ColorText>}</>}
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
    >
      <DataForm
        form={form}
        values={{
          parent_id: parentId,
          name: '',
          path: '',
          icon: '',
          is_active: Status.ON,
          permission_ids: [],
          role_ids: [],
        }}
      />
    </PopupModal>
  )
}

export default CreatePopup
