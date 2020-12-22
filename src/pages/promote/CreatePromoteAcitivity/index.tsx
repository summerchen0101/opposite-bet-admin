import Dashboard from '@/components/Dashboard'
import { Status } from '@/lib/enums'
import { Form as AntForm } from 'antd'
import React from 'react'
import DataForm, { FormData } from '../PromoteAcitivity/containers/DataForm'
import { useAPIService } from '../PromoteAcitivity/service'
import PageHeader from './components/PageHeader'
const CreatePromoteActivity: React.FC = () => {
  const [form] = AntForm.useForm()
  const { onCreate } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      console.log(v)
      // await onCreate({
      //   title: v.title,
      //   content: v.content,
      //   content_mobile: v.content_mobile,
      //   start_at: v.date_range_type === 'limit' ? v.limit_range[0].unix() : 0,
      //   end_at: v.date_range_type === 'limit' ? v.limit_range[1].unix() : 0,
      //   img: v.img,
      //   img_mobile: v.img_mobile,
      //   bonus: v.bonus,
      //   is_active: v.is_active === Status.ON,
      // })
      // history.goBack()
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  return (
    <Dashboard>
      <PageHeader onSubmit={() => handleSubmit()} />
      <DataForm
        form={form}
        values={{
          title: '',
          content: '',
          date_range_type: 'forever',
          limit_range: [null, null],
          is_active: Status.ON,
          content_mobile: '',
          img: '',
          img_mobile: '',
          bonus: null,
        }}
      />
    </Dashboard>
  )
}

export default CreatePromoteActivity
