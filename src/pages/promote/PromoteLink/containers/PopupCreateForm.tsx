import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Alert,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { CascaderSelector } from '@/components'
const { Option } = Select
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]
  return (
    <PopupModal visible={isDisplay} title="新增推廣連結" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="帳號名稱" name="mainTeam" required>
          <h5 style={{ margin: 0 }}>aaahcd (總代理)</h5>
        </FormField>
        <FormField label="組織層級" required>
          <CascaderSelector
            options={options}
            placeholder="加盟商 / 股東 / 總代"
          />
        </FormField>

        <FormField
          label="代理商域名"
          required
          extra={
            <span>
              限英數、長度5-12{' '}
              <span style={{ color: 'red' }}>
                (請注意：新增後不可修改、刪除！)
              </span>
            </span>
          }
        >
          <Input.Group compact>
            <FormField style={{ width: '70%', marginBottom: 0 }}>
              <Input placeholder="http://google/" />
            </FormField>
            <FormField style={{ width: '30%', marginBottom: 0 }}>
              <Input allowClear defaultValue="fwWefg" />
            </FormField>
          </Input.Group>
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
