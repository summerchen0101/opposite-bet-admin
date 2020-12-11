import { PopupModal } from '@/components'
import useMultiPicker from '@/utils/hooks/useMultiPicker'
import { addKeyToArrayItem } from '@/utils/transfer'
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
} from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const CreateFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('createForm')
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
  const areaOpts = [
    { label: '美國', value: 'opt1' },
    { label: '英國', value: 'opt2' },
  ]
  const playOpts = [
    { label: '波膽', value: 'opt1' },
    { label: '總得分', value: 'opt2' },
  ]
  const eventOpts = [
    { label: '全場', value: 'full' },
    { label: '半場', value: 'helf' },
  ]
  const teamOpts = [
    { label: '奧摩尼亞', value: 'opt1' },
    { label: '帕奧客', value: 'opt2' },
  ]
  const leagueOpts = [
    { label: '大聯盟', value: 'opt1' },
    { label: '乙組聯賽', value: 'opt2' },
  ]

  const eventTypes = [
    { label: '主', count: 8 },
    { label: '和', count: 4 },
    { label: '客', count: 8 },
  ]

  const columns = eventTypes.map((t, i) => {
    const data = [...Array(t.count)]
    const { items, addOne, removeOne, addAll, removeAll } = useMultiPicker(
      data.map((d, i) => `${t.label}-${i.toString()}`),
    )
    return {
      title: (
        <div className="text-center">
          <Checkbox
            className="float-left"
            checked={items.length > 0 && items.length === data.length}
            onChange={(e) => (e.target.checked ? addAll() : removeAll())}
          />
          {t.label}
        </div>
      ),
      render: (_, row) => (
        <>
          {data.map((d, i) => (
            <Space key={i} className="mb-1">
              <Checkbox
                checked={items.includes(`${t.label}-${i.toString()}`)}
                onChange={(e) =>
                  e.target.checked
                    ? addOne(`${t.label}-${i.toString()}`)
                    : removeOne(`${t.label}-${i.toString()}`)
                }
              />
              <span className="text-nowrap">1-0</span>
              <Input size="small" defaultValue="7.5" />
              <Input size="small" defaultValue="32,120" />
            </Space>
          ))}
        </>
      ),
      className: 'align-top',
      width: 100,
    }
  })

  const data = [{ key: 1 }]

  return (
    <PopupModal
      visible={visible}
      title="新增/編輯賽事"
      onCancel={() => setVisible(false)}
      width={1000}
      footer={[
        <Button key="reset" onClick={() => form.resetFields()}>
          重置
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          送出
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="地區" name="area" initialValue="opt1">
              <Select options={areaOpts} />
            </Form.Item>
            <Form.Item label="主隊" name="mainTeam" initialValue="opt1">
              <Select options={teamOpts} />
            </Form.Item>
            <Form.Item label="開賽時間" name="startAt">
              <DatePicker showTime style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="聯盟" name="league" initialValue="opt1">
              <Select options={leagueOpts} />
            </Form.Item>
            <Form.Item label="客隊" name="sideTeam" initialValue="opt1">
              <Select options={teamOpts} />
            </Form.Item>
            <Form.Item label="帳務日期" name="checkoutAt">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Space className="mb-2">
              <Form.Item label="玩法" name="play" initialValue="opt1">
                <Select options={playOpts} style={{ width: '130px' }} />
              </Form.Item>
              <Form.Item label="場次" name="event" initialValue="full">
                <Select options={eventOpts} style={{ width: '130px' }} />
              </Form.Item>
            </Space>
            <Table
              columns={addKeyToArrayItem(columns)}
              dataSource={addKeyToArrayItem(data)}
              size="small"
              bordered
              pagination={false}
            />
          </Col>
        </Row>
      </Form>
    </PopupModal>
  )
}

export default CreateFormPopup
