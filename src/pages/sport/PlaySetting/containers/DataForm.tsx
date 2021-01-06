import { NumberInput } from '@/components'
import { Col, Form, Input, Row, Space, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect, useState } from 'react'
export interface FormData {
  id?: number
  home_score: number
  away_score: number
  odds: number
  bet_amount_limit: number
  single_bet_limit: number
  single_bet_least: number
  auto_odds_amount_unit: number
  auto_odds_rate_unit: number
  is_auto_odds: boolean
  // is_open_bet: boolean
  // is_active: boolean
  // section_id: number
  // play_id: number
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}

const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={values}
      requiredMark={false}
    >
      <Form.Item label="比分(主/客)" style={{ marginBottom: 0 }}>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          name="home_score"
          rules={[{ required: true, message: '請輸入主隊分數' }]}
        >
          <NumberInput placeholder="主隊" />
        </Form.Item>
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            lineHeight: '32px',
            textAlign: 'center',
          }}
        >
          -
        </span>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
          name="away_score"
          rules={[{ required: true, message: '請輸入客隊分數' }]}
        >
          <NumberInput placeholder="客隊" />
        </Form.Item>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="獲利率" name="odds" rules={[{ required: true }]}>
            <Input addonAfter="%" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="可交易量"
            name="bet_amount_limit"
            rules={[{ required: true }]}
          >
            <NumberInput />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="自動降賠"
            name="is_auto_odds"
            valuePropName="checked"
            className="mb-1"
          >
            <Switch />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Space>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: '請輸入降賠注額',
                  },
                ]}
                className="mb-0"
                name="auto_odds_amount_unit"
              >
                <NumberInput
                  placeholder="100000"
                  addonAfter="元"
                  style={{ width: '150px' }}
                />
              </Form.Item>
              <span>以上降</span>
              <Form.Item
                rules={[{ required: true, message: '請輸入降賠比例' }]}
                className="mb-0"
                name="auto_odds_rate_unit"
              >
                <Input
                  placeholder="0.1"
                  addonAfter="%"
                  style={{ width: '120px' }}
                />
              </Form.Item>
            </Space>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="單注上限"
            name="single_bet_limit"
            rules={[{ required: true }]}
          >
            <NumberInput />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="單注下限"
            name="single_bet_least"
            rules={[{ required: true }]}
          >
            <NumberInput />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
