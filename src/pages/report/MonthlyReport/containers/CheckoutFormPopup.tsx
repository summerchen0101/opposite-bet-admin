import { PopupModal } from '@/components'
import { Button, Col, Divider, Form, Input, Row, Select } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
import { MinusOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const StyledText = styled.div<{ red?: boolean; green?: boolean }>`
  background: #eee;
  padding: 3px 8px;
  border-radius: 3px;
  ${({ red }) =>
    red &&
    `
      background:#ffccc7;
      color: #820014;
    `}
  ${({ green }) =>
    green &&
    `
      background:#d9f7be;
      color: #254000;
    `}
`
const CalcMark = styled.span`
  position: relative;
  top: 35px;
  left: 7px;
`

const CheckoutFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('checkoutForm')
  const [form] = Form.useForm()
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      console.log('Received values of form: ', values)
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }

  const typeOpts = [
    { label: '收款', value: 'opt1' },
    { label: '出款', value: 'opt2' },
  ]

  return (
    <PopupModal
      visible={visible}
      title="2020/11 代理月结算 gogo[陳]"
      onCancel={() => setVisible(false)}
      width={700}
      footer={[
        <Button key="reset" onClick={() => setVisible(false)}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          送出
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Row>
          <Col span={5}>
            <Form.Item label="本層營運額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>＋</CalcMark>
          </Col>
          <Col span={5}>
            <Form.Item label="手續費">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>－</CalcMark>
          </Col>
          <Col span={5}>
            <Form.Item label="已結算">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>＝</CalcMark>
          </Col>
          <Col span={6}>
            <Form.Item label="未結算額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item label="本層營運額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>＋</CalcMark>
          </Col>
          <Col span={5}>
            <Form.Item label="下層營運額">
              <StyledText red>-1000</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>－</CalcMark>
          </Col>
          <Col span={5}>
            <Form.Item label="已交收額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>＝</CalcMark>
          </Col>
          <Col span={6}>
            <Form.Item label="未交收額">
              <StyledText green>1000</StyledText>
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left">結算金額</Divider>
        <Row>
          <Col span={5}>
            <Form.Item label="本層營運額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>＋</CalcMark>
          </Col>
          <Col span={5}>
            <Form.Item label="下層營運額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>－</CalcMark>
          </Col>
          <Col span={5}>
            <Form.Item label="已交收額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
          <Col span={1}>
            <CalcMark>＝</CalcMark>
          </Col>
          <Col span={6}>
            <Form.Item label="未交收額">
              <StyledText>0</StyledText>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="交收額度">
              <Input
                addonBefore={
                  <Select
                    options={typeOpts}
                    defaultValue="opt1"
                    style={{ width: '80px' }}
                  />
                }
                itemType="number"
                placeholder="0"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </PopupModal>
  )
}

export default CheckoutFormPopup
