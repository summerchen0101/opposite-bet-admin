import PopupModal from '@/components/PopupModal'
import { Button, DatePicker, Input, Select, Space, Form as AntForm } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleBatchCreateModal } from '../reducer'
import { selectDisplayBatchCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { PopupTable } from '@/components'
const { Option } = Select
const tradeOptions = [
  { label: '全部', value: 'all' },
  { label: '存入-手動入款', value: 'opt1' },
  { label: '存入-人工存入', value: 'opt2' },
  { label: '存入-存款優惠', value: 'opt3' },
  { label: '存入-負數額度歸零', value: 'opt4' },
  { label: '存入-取消出款', value: 'opt5' },
  { label: '存入-其他', value: 'opt6' },
  { label: '存入-反點優惠', value: 'opt7' },
  { label: '存入-活動優惠', value: 'opt8' },
  { label: '存入-入款補存', value: 'opt9' },
  { label: '提出-重複出款', value: 'opt10' },
  { label: '提出-公司入款誤存', value: 'opt11' },
  { label: '提出-手動申請出款', value: 'opt12' },
  { label: '提出-其他', value: 'opt13' },
]
const BatchCreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayBatchCreateModal)
  const onCancel = () => {
    dispatch(toggleBatchCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleBatchCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  let columns = [
    {
      title: '編號',
      render: () => '1223',
    },
    {
      title: '帳號 / 名稱',
      render: () => '-',
    },
    {
      title: '金額',
      render: () => '1,000.00',
    },
    {
      title: '備註',
      render: () => '-',
    },
    {
      title: '狀態',
      render: () => '-',
    },
  ]
  columns = columns.map((t, i) => ({ ...t, key: i }))
  const data = [...Array(10)].map((t, i) => ({ ...t, key: i }))
  return (
    <PopupModal
      visible={isDisplay}
      title="批量新增 - 人工存取"
      onCancel={onCancel}
      width={830}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="inline">
        <FormField label="類型" name="type" required>
          <Select placeholder="請選擇" allowClear style={{ width: '150px' }}>
            <Option value="opt1">存入</Option>
            <Option value="opt2">提出</Option>
          </Select>
        </FormField>
        <FormField label="存提項目" name="trade" required>
          <Select
            placeholder="請選擇"
            allowClear
            options={tradeOptions}
            style={{ width: '150px' }}
          />
        </FormField>
        <FormField>
          <Button type="primary">選擇檔案</Button>
        </FormField>
        <FormField>
          <Button type="primary">檔案上傳</Button>
        </FormField>
        <FormField>
          <Button>範例下載</Button>
        </FormField>
      </Form>
      <PopupTable columns={columns} data={data} />
      <div style={{ textAlign: 'center' }}>
        <Space size="large">
          <Button type="primary" htmlType="submit">
            送出
          </Button>
          <Button onClick={onCancel} htmlType="reset">
            取消
          </Button>
        </Space>
      </div>
    </PopupModal>
  )
}

export default BatchCreateForm
