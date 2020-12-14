import { DateRangePicker } from '@/components'
import { Form, Input, Radio } from 'antd'
import React from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { InMail } from '../../routes'

const SearchBar: React.FC = () => {
  const history = useHistory()
  const { type } = useParams<{ type: string }>()
  const typeOpts = [
    { label: '收件夾', value: 'recieve' },
    { label: '寄件夾', value: 'send' },
  ]
  const targetOpts = [
    { label: '全部', value: 'all' },
    { label: '代理', value: 'agent' },
    { label: '會員', value: 'member' },
  ]
  const statusOpts = [
    { label: '全部', value: 'all' },
    { label: '讀取', value: 'read' },
    { label: '未讀取', value: 'unread' },
  ]
  return (
    <Form layout="inline" className="mb-1">
      <Form.Item label="收發信" name="type" initialValue="recieve">
        <Radio.Group
          options={typeOpts}
          onChange={(e) => history.push(`/announce/message/${e.target.value}`)}
        />
      </Form.Item>
      <Form.Item label="期間">
        <DateRangePicker />
      </Form.Item>
      <Form.Item label="主題">
        <Input style={{ width: '130px' }} />
      </Form.Item>

      {type === 'send' ? (
        <Form.Item label="信件總類" name="target" initialValue="all">
          <Radio.Group options={targetOpts} />
        </Form.Item>
      ) : (
        <Form.Item label="讀取狀態" name="status" initialValue="all">
          <Radio.Group options={statusOpts} />
        </Form.Item>
      )}
    </Form>
  )
}

export default SearchBar