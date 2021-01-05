import { usePopupProvider } from '../../context/PopupProvider'
import { addKeyToArrayItem } from '@/utils/transfer'
import {
  Button,
  Col,
  Descriptions,
  Form,
  Input,
  Layout,
  Row,
  Space,
  Switch,
  Table,
} from 'antd'
import { PlusOutlined, MinusOutlined, ReloadOutlined } from '@ant-design/icons'
import React from 'react'
import { IconLink } from '@/components'

const { Header, Content } = Layout

const data = [{ key: 1 }]

const GameControlPanel: React.FC = () => {
  const [, setGameOrdersVisible] = usePopupProvider('gameOrders')

  const events = [{ label: '全場' }, { label: '半場' }]
  const scoreTypes = [
    { label: '主', count: 8 },
    { label: '和', count: 4 },
    { label: '客', count: 8 },
  ]
  return (
    <div style={{ padding: '20px' }}>
      <Space className="mb-2">
        <h3 className="mb-0">賽事 (3381)</h3>
        <IconLink icon={<ReloadOutlined />} label="重新整理" />
      </Space>

      <Form size="small" style={{ width: '1000px' }}>
        <Form.Item>
          <Descriptions size="small" column={4}>
            <Descriptions.Item label="比賽時間">
              2020-11-18 00:01:51
            </Descriptions.Item>
            <Descriptions.Item label="帳務日期">2020-11-18</Descriptions.Item>
            <Descriptions.Item label="聯盟">球友會友誼</Descriptions.Item>
            <Descriptions.Item label="對陣">
              韋斯咸(主) vs 阿斯頓維拉
            </Descriptions.Item>
          </Descriptions>
          <Space className="mb-2">
            <Form.Item
              label="自動結帳"
              valuePropName="checked"
              className="mb-0"
            >
              <Switch defaultChecked={true} />
            </Form.Item>
            <Button size="small" danger>
              全部停押
            </Button>
            <Button size="small" type="primary" danger>
              全部關盤
            </Button>
          </Space>
        </Form.Item>
        {events.map((t, i) => (
          <div key={i} className="mb-2">
            <Space className="mb-2">
              <h2 className="mb-0">{t.label}</h2>
              <Button danger>停押</Button>
              <Button type="primary" danger>
                關盤
              </Button>
            </Space>
            <Row gutter={16}>
              {scoreTypes.map((s, s_i) => (
                <Col span={8} key={s_i}>
                  <h3>{s.label}</h3>
                  {[...Array(s.count)].map((c, c_i) => (
                    <Space key={c_i} className="mb-1">
                      <span>1-0</span>
                      <Form.Item className="mb-0">
                        <Input.Group compact>
                          <Button icon={<PlusOutlined />} />
                          <Input style={{ width: '60px' }} />
                          <Button icon={<MinusOutlined />} />
                        </Input.Group>
                      </Form.Item>
                      <span>
                        <a onClick={() => setGameOrdersVisible(true)}>789</a> /{' '}
                        <span>1222</span>
                      </span>
                      <Button danger>停</Button>
                      <Button type="primary" danger>
                        關
                      </Button>
                    </Space>
                  ))}
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Form>
    </div>
  )
}

export default GameControlPanel
