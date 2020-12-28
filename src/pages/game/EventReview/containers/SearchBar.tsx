import { Button, DatePicker, Form, Select, Space } from 'antd'
import React from 'react'
const SearchBar: React.FC = () => {
  const statusOpts = [
    { label: '全部', value: 'all' },
    { label: '已結帳', value: 'opt1' },
    { label: '未結帳', value: 'opt2' },
  ]
  return (
    <Form layout="inline" className="mb-2">
      <Form.Item>
        <Space>
          <DatePicker.RangePicker />
          <Button>昨日</Button>
          <Button>今日</Button>
        </Space>
      </Form.Item>
      {/* <Form.Item label="場次" name="section" initialValue={0}>
        <Select
          options={[{ label: '全部', value: 0 }]}
          style={{ width: '130px' }}
        />
      </Form.Item> */}

      <Form.Item label="結帳狀態" name="status" initialValue="all">
        <Select options={statusOpts} style={{ width: '130px' }} />
      </Form.Item>
    </Form>
  )
}

export default SearchBar
