import { PopupModal, Text } from '@/components'
import Form, { FormField } from '@/components/Form'
import { toDateTime } from '@/utils/transfer'
import { Form as AntForm, Select, Table } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const { Option } = Select
const DepositHistoryPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('depositHistory')
  const [form] = AntForm.useForm()

  let columns = [
    {
      title: '編號',
      render: (_, row) => '99123',
    },
    {
      title: '充值類型',
      render: (_, row) => '人工扣錢(計入調整金額)',
    },
    {
      title: '充值金額',
      render: (_, row) => '2,000.00',
    },
    {
      title: '流水限制',
      render: (_, row) => '2,000.00',
    },
    {
      title: '當下流水',
      render: (_, row) => '2,000.00',
    },
    {
      title: '未完成流水',
      render: (_, row) => '2,000.00',
    },
    {
      title: '可提領資金',
      render: (_, row) => '2,000.00',
    },
    {
      title: '是否解鎖',
      render: (_, row) => '是',
    },
    {
      title: '狀態',
      render: (_, row) => '充值成功',
    },
    {
      title: '建立時間',
      render: (_, row) => toDateTime(Date.now()),
      width: '180px',
    },
    {
      title: '完成時間',
      render: (_, row) => toDateTime(Date.now()),
      width: '180px',
    },
    {
      title: '備註',
      render: (_, row) => '-',
      width: 130,
    },
  ]
  columns = columns.map((t, i) => ({ ...t, key: i }))
  const data = [...Array(10)].map((t, i) => ({ ...t, key: i }))
  return (
    <PopupModal
      visible={visible}
      title="wxg1111[沈沈] 充值記錄"
      onCancel={() => setVisible(false)}
      width={800}
    >
      <Form form={form} layout="inline">
        <FormField label="狀態" name="status" initialValue="opt1">
          <Select placeholder="請選擇" style={{ width: '130px' }}>
            <Option value="opt1">全部</Option>
            <Option value="opt2">待審核</Option>
            <Option value="opt3">充值成功</Option>
            <Option value="opt4">充值失敗</Option>
            <Option value="opt5">訂單超時</Option>
            <Option value="opt6">訂單建立失敗</Option>
            <Option value="opt7">待付款</Option>
          </Select>
        </FormField>
        <FormField label="充值類型" name="type" initialValue="opt1">
          <Select placeholder="請選擇" style={{ width: '180px' }}>
            <Option value="opt1">全部</Option>
            <Option value="opt2">銀行卡存款</Option>
            <Option value="opt3">新增存款(計入存款)</Option>
            <Option value="opt4">人工加錢(計入調整金額)</Option>
            <Option value="opt5">人工優惠(計入優惠)</Option>
          </Select>
        </FormField>
      </Form>
      <Table
        dataSource={data}
        columns={columns}
        size="small"
        bordered
        pagination={{ pageSize: 8 }}
        scroll={{ x: 1400 }}
      />
    </PopupModal>
  )
}

export default DepositHistoryPopup
