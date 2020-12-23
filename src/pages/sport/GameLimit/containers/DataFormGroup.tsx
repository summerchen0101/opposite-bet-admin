import { Col, Row } from 'antd'
import React from 'react'
import DataForm from './DataForm'
const eventTypes = [
  { label: '主', code: 'main', count: 8 },
  { label: '和', code: 'even', count: 4 },
  { label: '客', code: 'guest', count: 8 },
]

const DataFormGroup: React.FC = () => {
  return (
    <div>
      {eventTypes.map((data, i) => (
        <Col span={18} key={i}>
          <DataForm data={data} />
        </Col>
      ))}
    </div>
  )
}

export default DataFormGroup
