import React from 'react'
import Dashboard from '@/components/Dashboard'
import { Statistic, Col, Row, Divider, Card, Table, Form } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { addKeyToArrayItem } from '@/utils/transfer'
import {
  BasicSelector,
  DateRangePicker,
  FormField,
  RelativeDateBtns,
} from '@/components'

interface TableItem {
  key?: number
  platform: string
  bettringMember: string
  bettringCount: string
  bettringTotal: string
  effectivePoint: string
  total: string
}
let columns: ColumnsType<TableItem> = [
  { title: '遊戲平台', render: (_, row) => row.platform },
  { title: '下注人數', render: (_, row) => row.bettringMember },
  { title: '注單數', render: (_, row) => row.bettringCount },
  { title: '下注额度', render: (_, row) => row.bettringTotal },
  { title: '有效注额', render: (_, row) => row.effectivePoint },
  { title: '会员小计', render: (_, row) => row.total },
]
columns = addKeyToArrayItem(columns)
let data: TableItem[] = [
  {
    platform: '-',
    bettringMember: '-',
    bettringCount: '-',
    bettringTotal: '-',
    effectivePoint: '-',
    total: '-',
  },
  {
    platform: '加總',
    bettringMember: '-',
    bettringCount: '-',
    bettringTotal: '-',
    effectivePoint: '-',
    total: '-',
  },
]
data = addKeyToArrayItem(data)

const options = [
  { label: '全部', value: 0 },
  { label: '代理商', value: 1 },
  { label: '總代', value: 2 },
  { label: '代理', value: 3 },
]
const Component: React.FC = () => (
  <Dashboard>
    <Form layout="inline">
      <FormField>
        <DateRangePicker />
      </FormField>
      <FormField>
        <RelativeDateBtns />
      </FormField>
      <FormField>
        <BasicSelector options={options} value={0} />
      </FormField>
    </Form>
    <div style={{ marginTop: '15px' }}></div>
    <Card size="small">
      <Row gutter={16} style={{ margin: '30px 20px' }}>
        <Col span={4}>
          <Statistic
            title="加總"
            value={-237505.31}
            valueStyle={{ color: '#cf1322' }}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="總提加總"
            value={-227280.16}
            valueStyle={{ color: '#cf1322' }}
          />
        </Col>
        <Col span={4}>
          <Statistic title="註冊人數" value={2893} suffix="人" />
        </Col>
        <Col span={4}>
          <Statistic title="首次充值" value={112} suffix="人" />
        </Col>
        <Col span={4}>
          <Statistic title="首次提现" value={112} suffix="人" />
        </Col>
        <Col span={4}>
          <Statistic title="总登入人数" value={2132} suffix="人" />
        </Col>
      </Row>
    </Card>
    <div style={{ marginTop: '15px' }}></div>
    <Row gutter={16}>
      <Col span={12}>
        <Card title="總收款" size="small">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="銀行存款" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="存款手續費" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="第三方存款" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="代客儲值" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="代客储值收回" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="第三方代储值" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="第三方代储值收回" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="人工增加额度" value={0} suffix="(0人)" />
            </Col>
          </Row>
        </Card>
        <div style={{ marginTop: '15px' }}></div>
        <Card title="已过帐报表总额度" size="small" bodyStyle={{ padding: 0 }}>
          <Table
            size="small"
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card title="总提款 525,852.16 (81 人)" size="small">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="提款" value={525928.56} suffix="(80人)" />
            </Col>
            <Col span={12}>
              <Statistic title="人工减少额度" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic
                title="提款手续费"
                value={-76.4}
                suffix="(1人)"
                valueStyle={{ color: '#cf1322' }}
              />
            </Col>
          </Row>
        </Card>
        <div style={{ marginTop: '15px' }}></div>
        <Card title="总优惠 10,225.15 (25 人)" size="small">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="优惠活动赠点" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic
                title="上层修改优惠活动赠点"
                value={10225.15}
                suffix="(25人)"
              />
            </Col>
          </Row>
        </Card>
        <div style={{ marginTop: '15px' }}></div>
        <Card title="总派点 0 (0 人)" size="small">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="代理派点" value={0} suffix="(0人)" />
            </Col>
            <Col span={12}>
              <Statistic title="代理回收点数" value={0} suffix="(0人)" />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </Dashboard>
)

export default Component
