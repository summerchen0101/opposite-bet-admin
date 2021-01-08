import { PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Button, Col, Descriptions, Form, Row, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { useAPIService } from '../service'
import { FormData } from './DataForm'

const columns: ColumnsType<{ id: number }> = [
  {
    title: '上層',
    render: (_, row) => (
      <>
        代理
        <br />
        gogo[陳]
      </>
    ),
  },
  {
    title: '帳號/名稱',
    render: (_, row) => 'ageee[花]',
  },
  {
    title: '申請單號 / 時間',
    render: (_, row) => (
      <>
        #01e48m47k81en4ym4ckqf87qc1
        <br />
        2020-03-25 18:34:38
      </>
    ),
  },
  {
    title: '金額 / 核發時間',
    render: (_, row) => (
      <>
        1,000
        <br />
        2020-03-25 18:34:38
      </>
    ),
  },
  { title: '備註(後台)', render: (_, row) => '-' },
  { title: '備註(會員端)', render: (_, row) => '-' },
]

const DetailPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('detail')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm<FormData>()
  const handleSubmit = async () => {
    try {
      const v = (await form.validateFields()) as FormData
      await onCreate({
        block_type: v.block_type,
        platform_type: v.platform_type,
        ip: v.ip,
        note: v.note,
        is_active: v.is_active,
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
      title={
        <>
          銀行存摺詳細
          <Button type="primary" danger size="small" className="ml-2">
            封存卡片
          </Button>
        </>
      }
      onCancel={() => handleCancel()}
      onOk={() => handleSubmit()}
      footer={false}
      width={900}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Descriptions
            title="銀行資訊"
            column={1}
            bordered
            size="small"
            className="mb-2"
          >
            <Descriptions.Item label="下限與上限">
              300.00 ~ 200000.00
            </Descriptions.Item>
            <Descriptions.Item label="帳戶狀態">啟用</Descriptions.Item>
            <Descriptions.Item label="銀行名稱">
              國泰世華商業銀行 (013)
            </Descriptions.Item>
            <Descriptions.Item label="分行名稱">新莊龍鳳郵局</Descriptions.Item>
            <Descriptions.Item label="帳戶名稱">王先生</Descriptions.Item>
            <Descriptions.Item label="帳戶號碼">
              20191216134105
            </Descriptions.Item>
            <Descriptions.Item label="備註">
              2020-11-27 15:19:23
            </Descriptions.Item>
            <Descriptions.Item label="最後修改時間">
              2020-11-27 15:19:23
            </Descriptions.Item>
          </Descriptions>
          <Descriptions title="輪替資訊" column={1} bordered size="small">
            <Descriptions.Item label="輪替群組狀態">備用</Descriptions.Item>
            <Descriptions.Item label="輪替群組">預設</Descriptions.Item>
            <Descriptions.Item label="輪替次數">1</Descriptions.Item>
            <Descriptions.Item label="充值總額">-</Descriptions.Item>
            <Descriptions.Item label="充值上限">-</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={16}>
          <h3>帳戶異動記錄</h3>
          <PopupTable
            columns={columns}
            data={[...Array(3)].map((_, id) => ({ id }))}
            scroll={{ x: 900 }}
          />
        </Col>
      </Row>
    </PopupModal>
  )
}

export default DetailPopup
