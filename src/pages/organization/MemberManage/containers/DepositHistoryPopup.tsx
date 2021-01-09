import { ColorText, IconLink, PopupModal, PopupTable, Text } from '@/components'
import Form, { FormField } from '@/components/Form'
import { toDateTime } from '@/utils/transfer'
import { Form as AntForm, Select, Table, Tabs, Tooltip } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { CopyOutlined } from '@ant-design/icons'

const recordTypeOpts = [
  { label: '充值', value: 1 },
  { label: '出金', value: 2 },
  { label: '加減碼', value: 3 },
]

let depositColumns = [
  {
    title: '申請單號',
    render: (_, row) => (
      <Tooltip title="fawfweweerw">
        <IconLink icon={<CopyOutlined />} />
      </Tooltip>
    ),
  },
  {
    title: '公司帳戶',
    render: (_, row) => (
      <>
        (812) 台新國際商業銀行
        <br />
        12312345352222
      </>
    ),
  },
  {
    title: '付款方式',
    render: (_, row) => '網路匯款',
  },
  {
    title: '充值金額',
    render: (_, row) => '2,000.00',
  },
  {
    title: '完成時間',
    render: (_, row) => '2021-01-03 12:33:22',
  },
]

let withdrawColumns = [
  {
    title: '申請單號',
    render: (_, row) => (
      <Tooltip title="fawfweweerw">
        <IconLink icon={<CopyOutlined />} />
      </Tooltip>
    ),
  },
  {
    title: '會員帳戶',
    render: (_, row) => (
      <>
        (812) 台新國際商業銀行
        <br />
        12312345352222
      </>
    ),
  },
  {
    title: '出金金額',
    render: (_, row) => '2,000.00',
  },
  {
    title: '完成時間',
    render: (_, row) => '2021-01-03 12:33:22',
  },
]

let manualColumns = [
  {
    title: '調節類型',
    render: (_, row) => '加碼',
  },
  {
    title: '金額',
    render: (_, row) => <ColorText green>100</ColorText>,
  },
  {
    title: '交易前餘額',
    render: (_, row) => '2,000.00',
  },
  {
    title: '交易後餘額',
    render: (_, row) => '2,100.00',
  },
  {
    title: '完成時間',
    render: (_, row) => '2021-01-03 12:33:22',
  },
]

const DepositHistoryPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('depositHistory')
  const [form] = AntForm.useForm()

  depositColumns = depositColumns.map((t, i) => ({ ...t, key: i }))
  withdrawColumns = withdrawColumns.map((t, i) => ({ ...t, key: i }))
  manualColumns = manualColumns.map((t, i) => ({ ...t, key: i }))
  const data = [...Array(5)].map((_, id) => ({ id }))

  return (
    <PopupModal
      visible={visible}
      title="wxg1111[沈沈] 金流紀錄(最新5筆)"
      onCancel={() => setVisible(false)}
      width={800}
    >
      <Tabs defaultActiveKey="1" onChange={(key) => {}}>
        <Tabs.TabPane tab="充值" key="1">
          <PopupTable data={data} columns={depositColumns} pagination={false} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="出金" key="2">
          <PopupTable
            data={data}
            columns={withdrawColumns}
            pagination={false}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="加減碼" key="3">
          <PopupTable data={data} columns={manualColumns} pagination={false} />
        </Tabs.TabPane>
      </Tabs>
    </PopupModal>
  )
}

export default DepositHistoryPopup
