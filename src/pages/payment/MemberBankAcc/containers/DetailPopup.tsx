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
        1000
        <br />
        2020-03-25 18:34:38
      </>
    ),
  },
  { title: '異動前餘額', render: (_, row) => 9000 },
  { title: '異動後餘額', render: (_, row) => 1000 },
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
            刪除帳戶
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
            title="會員資料"
            column={1}
            bordered
            size="small"
            className="mb-2"
          >
            <Descriptions.Item label="廠商">ABC</Descriptions.Item>
            <Descriptions.Item label="上層(代理)">
              cntd36(小城)
            </Descriptions.Item>
            <Descriptions.Item label="會員帳號">
              barry0325(老王)
            </Descriptions.Item>
          </Descriptions>
          <Descriptions title="出金統計" column={1} bordered size="small">
            <Descriptions.Item label="出金總額">2000</Descriptions.Item>
            <Descriptions.Item label="出金次數">2</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={8}>
          <Descriptions
            title="個人帳戶資訊"
            column={1}
            bordered
            size="small"
            className="mb-2"
          >
            <Descriptions.Item label="驗證狀態">等待驗證</Descriptions.Item>
            <Descriptions.Item label="預設帳戶">否</Descriptions.Item>
            <Descriptions.Item label="帳戶名稱">
              中華郵政股份有限公司 (700)
            </Descriptions.Item>
            <Descriptions.Item label="分行名稱">新莊龍鳳郵局</Descriptions.Item>
            <Descriptions.Item label="帳戶號碼">
              20191216134105
            </Descriptions.Item>
            <Descriptions.Item label="備註(後台)">-</Descriptions.Item>
            <Descriptions.Item label="備註(會員端)">-</Descriptions.Item>
            <Descriptions.Item label="登錄時間">
              2020-11-27 15:19:23
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={8}>
          <Descriptions
            column={1}
            bordered
            size="small"
            className="mb-2"
            layout="vertical"
          >
            <Descriptions.Item label="帳戶快照">
              <a href="https://fakeimg.pl/400x200/" target="_blank">
                <img
                  style={{ maxWidth: '100%' }}
                  src="https://fakeimg.pl/400x200/"
                />
              </a>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <h3>帳戶存提紀錄</h3>
      <PopupTable
        columns={columns}
        data={[...Array(3)].map((_, id) => ({ id }))}
      />
    </PopupModal>
  )
}

export default DetailPopup
