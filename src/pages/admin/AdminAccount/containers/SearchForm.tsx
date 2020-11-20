import React from 'react'
import { Form as AntForm, Input, Select } from 'antd'
import { FormField } from '@/components'
import { useTypedSelector, selectRoleOptions } from '../selectors'
import { useDispatch } from 'react-redux'
import { fetchAdminList } from '../reducer'

const initialValues = {
  account: '',
  role: null,
  status: null,
  ip: '',
}

const statusOptions = [
  { label: '未啟動', value: 0 },
  { label: '啟動', value: 1 },
  { label: '停用', value: 2 },
  { label: '凍結', value: 3 },
]
const SearchForm: React.FC = () => {
  const [form] = AntForm.useForm()
  const dispatch = useDispatch()
  const roleOptions = useTypedSelector(selectRoleOptions)
  const onFormChanged = (e) => {
    console.log('onFormChanged')
    form.submit()
  }
  const onFinished = (values) => {
    console.log('onFinished')
    dispatch(fetchAdminList(values))
  }
  return (
    <AntForm
      form={form}
      initialValues={initialValues}
      layout="inline"
      onFinish={onFinished}
    >
      <FormField name="account">
        <Input.Search
          placeholder="管理者帳號"
          onSearch={onFormChanged}
          allowClear
        />
      </FormField>
      <FormField name="role">
        <Select
          options={roleOptions}
          placeholder="全部角色"
          style={{ width: 150 }}
          onChange={onFormChanged}
          allowClear
        />
      </FormField>
      <FormField name="status">
        <Select
          options={statusOptions}
          placeholder="全部狀態"
          style={{ width: 150 }}
          onChange={onFormChanged}
          allowClear
        />
      </FormField>
      <FormField name="ip">
        <Input.Search placeholder="IP" onSearch={onFormChanged} allowClear />
      </FormField>
    </AntForm>
  )
}

export default SearchForm
