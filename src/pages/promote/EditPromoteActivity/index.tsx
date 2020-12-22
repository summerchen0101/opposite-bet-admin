import Dashboard from '@/components/Dashboard'
import { Status } from '@/lib/enums'
import { Form as AntForm } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAPIService } from '../PromoteAcitivity/service'
import PageHeader from './components/PageHeader'
import DataForm, { FormData } from '../PromoteAcitivity/containers/DataForm'
import { selectEditData, useTypedSelector } from '../PromoteAcitivity/selectors'
import moment from 'moment'
import { Activity } from '../PromoteAcitivity/API/types'

const EditPromoteActivity: React.FC = () => {
  const params = useParams<{ id: string }>()
  const [data, setData] = useState<Activity>(null)
  const { getFormData } = useAPIService()
  const getEditData = async () => {
    setData(await getFormData(+params.id))
  }
  useEffect(() => {
    getEditData()
  }, [params.id])
  const [form] = AntForm.useForm()
  const { onEdit } = useAPIService()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      console.log(v)
      await onEdit({
        id: +params.id,
        title: v.title,
        content: v.content,
        content_mobile: v.content_mobile,
        start_at: v.date_range_type === 'limit' ? v.limit_range[0].unix() : 0,
        end_at: v.date_range_type === 'limit' ? v.limit_range[1].unix() : 0,
        img: v.img,
        img_mobile: v.img_mobile,
        bonus: v.bonus,
        is_active: v.is_active === Status.ON,
      })
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  return (
    <Dashboard>
      <PageHeader onSubmit={() => handleSubmit()} />
      {data && (
        <DataForm
          form={form}
          values={{
            title: data.title,
            content: data.content,
            date_range_type: data.start_at ? 'limit' : 'forever',
            limit_range: [
              data.start_at && moment(data.start_at * 1000),
              data.start_at && moment(data.start_at * 1000),
            ],
            is_active: data.is_active ? Status.ON : Status.OFF,
            content_mobile: data.content_mobile,
            img: data.img,
            img_mobile: data.img_mobile,
            bonus: data.bonus,
          }}
        />
      )}
    </Dashboard>
  )
}

export default EditPromoteActivity
