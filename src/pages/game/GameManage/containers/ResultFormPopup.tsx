import { PopupModal } from '@/components'
import { Button, Form, Input } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const ResultFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('resultForm')
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

  return (
    <PopupModal
      visible={visible}
      title={
        <>
          添加 <span className="text-primary">全場波膽</span> 結果
        </>
      }
      onCancel={() => setVisible(false)}
      width={360}
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
        <Form.Item>
          <div className="mb-1">賽事編號：3381</div>
          <div className="mb-1">比賽時間：2020-11-18 00:01:51</div>
          <div className="mb-1">帳務日期：2020-11-18</div>
          <div className="mb-1">聯盟：球友會友誼</div>
          <div className="mb-0">對陣：韋斯咸(主) vs 阿斯頓維拉</div>
        </Form.Item>
        <div className="d-flex justify-content-between">
          <Form.Item label="主">
            <Input itemType="number" placeholder="0" />
          </Form.Item>
          <Form.Item label="">
            <div
              style={{
                width: '60px',
                position: 'relative',
                top: '28px',
                textAlign: 'center',
              }}
            >
              VS
            </div>
          </Form.Item>
          <Form.Item label="客">
            <Input itemType="number" placeholder="0" />
          </Form.Item>
        </div>
      </Form>
    </PopupModal>
  )
}

export default ResultFormPopup
