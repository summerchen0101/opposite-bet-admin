import { EmptyDivider, FormStaticText } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Input, Row, Col, Select, Space, Table, Checkbox } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toggleReviewModal } from '../reducer'
import { selectDisplayReviewModal, useTypedSelector } from '../selectors'
const { Option } = Select
const ReviewForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayReviewModal)
  const onCancel = () => {
    dispatch(toggleReviewModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleReviewModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const layout = {
    labelCol: { span: 8 },
  }
  let columns = [
    {
      title: '入款類型',
      render: () => '線上入款',
    },
    {
      title: '入款時間',
      render: () => '2020-09-30 01:16:01',
    },
    {
      title: '入款金額',
      render: () => '5,000.00',
    },
  ]
  columns = columns.map((t, i) => ({ ...t, key: i }))
  const data = [...Array(8)].map((t, i) => ({ ...t, key: i }))
  const checkboxStyle = {
    display: 'block',
    height: '35px',
    lineHeight: '35px',
    margin: 0,
  }
  return (
    <PopupModal
      visible={isDisplay}
      title="gogoro 出款審核"
      onCancel={onCancel}
      width={800}
    >
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="horizontal"
        labelAlign="left"
        {...layout}
      >
        <Row gutter={40}>
          <Col span={12}>
            <FormField label="會員名稱" className="narrow">
              <FormStaticText>gogoro</FormStaticText>
            </FormField>
            <FormField label="時間" className="narrow">
              <FormStaticText>2020-07-10 06:59:30</FormStaticText>
            </FormField>
            <FormField label="金額">
              <h5 style={{ margin: 0 }}>3,000.00</h5>
            </FormField>
            <h5>上次出款後之存款</h5>
            <FormField>
              <Table
                bordered
                size="small"
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
              />
            </FormField>
          </Col>
          <Col span={12}>
            <h5>可扣除項目</h5>
            <FormField>
              <Checkbox.Group defaultValue={['opt1']}>
                <Checkbox style={checkboxStyle} value="opt1">
                  行政費扣除 (50%)
                </Checkbox>
                <Checkbox style={checkboxStyle} value="opt2">
                  <Space size="small">
                    <span>出款手續費</span>
                    <Input style={{ width: '100px' }} placeholder="請輸入" />
                  </Space>
                </Checkbox>
              </Checkbox.Group>
            </FormField>
            <h5>備註</h5>
            <FormField>
              <Input.TextArea style={{ width: '100%' }} />
            </FormField>
            <h5>出款明細</h5>
            <FormField label="出款金額" className="narrow">
              <FormStaticText>3,000.00</FormStaticText>
            </FormField>
            <FormField label="優惠扣除" className="narrow">
              <FormStaticText>0.00</FormStaticText>
            </FormField>
            <FormField label="行政費扣除" className="narrow">
              <FormStaticText>0.00</FormStaticText>
            </FormField>
            <FormField label="出款手續費" className="narrow">
              <FormStaticText>0.00</FormStaticText>
            </FormField>
            <FormField label="實際出款金額" className="narrow">
              <FormStaticText>3,000.00</FormStaticText>
            </FormField>
          </Col>
        </Row>
        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button onClick={onCancel} htmlType="reset">
              關閉
            </Button>
            <Button type="primary" htmlType="submit">
              通過
            </Button>
            <Button type="primary" htmlType="submit">
              扣押
            </Button>
            <Button type="primary" htmlType="submit">
              拒絕
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default ReviewForm
