import { BasicSelector } from '@/components'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '存入-手動入款', value: 'opt1' },
  { label: '存入-人工存入', value: 'opt2' },
  { label: '存入-存款優惠', value: 'opt3' },
  { label: '存入-負數額度歸零', value: 'opt4' },
  { label: '存入-取消出款', value: 'opt5' },
  { label: '存入-其他', value: 'opt6' },
  { label: '存入-反點優惠', value: 'opt7' },
  { label: '存入-活動優惠', value: 'opt8' },
  { label: '存入-入款補存', value: 'opt9' },
  { label: '提出-重複出款', value: 'opt10' },
  { label: '提出-公司入款誤存', value: 'opt11' },
  { label: '提出-手動申請出款', value: 'opt12' },
  { label: '提出-其他', value: 'opt13' },
]
const ActionTypeSelector: React.FC = () => {
  const onChange = () => {}
  return (
    <BasicSelector
      value={'all'}
      onChange={onChange}
      options={options}
      placeholder="銀行帳號"
      width="180px"
    />
  )
}

export default ActionTypeSelector
