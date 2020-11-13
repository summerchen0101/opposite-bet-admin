import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Row,
  Col,
  Tabs,
  Radio,
  Upload,
  message,
  Card,
} from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { DateRangePicker, ImageCard } from '@/components'
const { Option } = Select

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const CreateForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl)
        setLoading(false)
      })
    }
  }

  return (
    <PopupModal
      visible={isDisplay}
      title="新增廣告"
      onCancel={onCancel}
      width={700}
    >
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Tabs defaultActiveKey="cn" type="card" size="small">
          <Tabs.TabPane tab="簡中" key="cn">
            <Row gutter={16}>
              <Col span={12}>
                <FormField label="標題" required>
                  <Input />
                </FormField>
                <FormField label="裝置" required>
                  <Radio.Group defaultValue="op3">
                    <Radio value="op1">H5</Radio>
                    <Radio value="op2">手機版</Radio>
                    <Radio value="op3">兩者皆上傳</Radio>
                  </Radio.Group>
                </FormField>
                <FormField label="公告期間" required>
                  <DateRangePicker />
                </FormField>
                <FormField label="上傳圖片" required>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: '100%' }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </FormField>
              </Col>
              <Col span={12}>
                <ImageCard>
                  <img src="https://fakeimg.pl/680x680/?text=Image" />
                </ImageCard>
              </Col>
            </Row>
          </Tabs.TabPane>
        </Tabs>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button htmlType="reset">重置</Button>
            <Button type="primary" htmlType="submit">
              送出
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
