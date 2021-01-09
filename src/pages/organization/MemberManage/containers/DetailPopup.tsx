import { IconLink, PopupConfirm, PopupModal, PopupTable } from '@/components'
import { Protocal } from '@/lib/enums'
import {
  Button,
  Col,
  Descriptions,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
} from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { FormOutlined, HistoryOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/lib/table'
const DetailPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('detail')
  const [, setDepositVisible] = usePopupProvider('depositHistory')
  const [, setPwVisible] = usePopupProvider('pwForm')
  const [, setBankVisible] = usePopupProvider('bankCardList')
  const [, setPointVisible] = usePopupProvider('manualPoint')
  const [form] = Form.useForm()

  interface TableItem {
    id: number
    label: string
    full: number
    half: number
  }

  const columns: ColumnsType<TableItem> = [
    { title: '足球反波膽', render: (_, row) => row.label },
    { title: '全場', render: (_, row) => row.full },
    { title: '半場', render: (_, row) => row.half },
  ]

  const data: TableItem[] = [
    { id: 1, label: '反水', full: 100, half: 100 },
    { id: 2, label: '單注(萬)', full: 0.1, half: 0.1 },
    { id: 3, label: '單場(萬)', full: 0.1, half: 0.1 },
  ]

  return (
    <PopupModal
      visible={visible}
      title="詳細資料"
      onCancel={() => setVisible(false)}
      footer={false}
      width={800}
    >
      <Space className="mb-2">
        <Button size="small" onClick={() => setDepositVisible(true)}>
          金流紀錄
        </Button>
        <Button size="small" onClick={() => setPwVisible(true)}>
          密碼修改
        </Button>
        <PopupConfirm onConfirm={() => {}}>
          <Button size="small">重置提領密碼</Button>
        </PopupConfirm>
        <Button size="small" onClick={() => setPointVisible(true)}>
          人工加減碼
        </Button>
        <Button size="small" onClick={() => setBankVisible(true)}>
          銀行帳戶
        </Button>
      </Space>
      <Row gutter={16}>
        <Col span={12}>
          <Descriptions
            title="帳號資訊"
            bordered
            column={1}
            size="small"
            extra={
              <Space>
                <IconLink icon={<FormOutlined />} />
                <IconLink icon={<HistoryOutlined />} />
              </Space>
            }
            className="mb-2"
          >
            <Descriptions.Item label="廠商">ABC</Descriptions.Item>
            <Descriptions.Item label="上層(代理)">gogoro[陳]</Descriptions.Item>
            <Descriptions.Item label="會員帳號">
              barry0325[老王]
            </Descriptions.Item>
            <Descriptions.Item label="允許登入">是</Descriptions.Item>
            <Descriptions.Item label="允許投注">是</Descriptions.Item>
            <Descriptions.Item label="手機號碼">0912123123</Descriptions.Item>
            <Descriptions.Item label="電子信箱">-</Descriptions.Item>
            <Descriptions.Item label="生日">-</Descriptions.Item>
            <Descriptions.Item label="微信">-</Descriptions.Item>
            <Descriptions.Item label="QQ">-</Descriptions.Item>
            <Descriptions.Item label="備註">-</Descriptions.Item>
          </Descriptions>

          <Descriptions bordered column={1} size="small" title="活動紀錄">
            <Descriptions.Item label="帳號啟用時間">
              2020-10-21 14:18:37
            </Descriptions.Item>
            <Descriptions.Item label="最後更新時間">
              2020-10-21 14:18:37
            </Descriptions.Item>
            <Descriptions.Item label="最後登入 IP">-</Descriptions.Item>
            <Descriptions.Item label="最後登入時間">-</Descriptions.Item>
            <Descriptions.Item label="最後活動時間">-</Descriptions.Item>
            <Descriptions.Item label="最後登入裝置">
              電腦 / Windows / Chrome瀏覽器
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={12}>
          <Descriptions
            bordered
            column={1}
            size="small"
            title="金流統計"
            className="mb-2"
          >
            <Descriptions.Item label="充值總額">2,000</Descriptions.Item>
            <Descriptions.Item label="充值次數">2</Descriptions.Item>
            <Descriptions.Item label="出金總額">2,000</Descriptions.Item>
            <Descriptions.Item label="出金次數">1</Descriptions.Item>
          </Descriptions>
          <Descriptions
            title="會員佔成"
            bordered
            size="small"
            column={1}
            className="mb-1"
            extra={<IconLink icon={<FormOutlined />} />}
          >
            <Descriptions.Item label="單注下限">2,00</Descriptions.Item>
          </Descriptions>
          <PopupTable data={data} columns={columns} pagination={false} />
        </Col>
      </Row>
    </PopupModal>
  )
}

export default DetailPopup
