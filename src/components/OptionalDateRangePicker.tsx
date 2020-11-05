import { BasicSelector, DateRangePicker } from '@/components'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  .ant-select {
    margin-right: -1px;
  }
`
interface OptionalDateRangePickerProps {
  options?: any[]
  selectedValue?: any
  value?: any
}

const OptionalDateRangePicker: React.FC<OptionalDateRangePickerProps> = ({
  options = [],
  selectedValue,
  value,
}) => {
  return (
    <Wrapper>
      <BasicSelector options={options} value={selectedValue} width="120px" />
      <DateRangePicker value={value} />
    </Wrapper>
  )
}

export default OptionalDateRangePicker
