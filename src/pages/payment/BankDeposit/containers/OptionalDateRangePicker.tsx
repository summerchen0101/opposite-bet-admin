import { BasicSelector, DateRangePicker } from '@/components'
import React from 'react'
import styled from 'styled-components'

const options = [
  { label: '申請時間', value: 'applyAt' },
  { label: '稽核時間', value: 'reviewAt' },
]
const OptionalDateRangePicker: React.FC = (props) => {
  return (
    <div {...props}>
      <BasicSelector options={options} value="applyAt" width="120px" />
      <DateRangePicker />
    </div>
  )
}

export default styled(OptionalDateRangePicker)`
  display: flex;
  .ant-select {
    margin-right: -1px;
  }
`
