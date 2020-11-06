import RadioGroup from '@/components/RadioGroup'
import React from 'react'

const options = [
  { label: '全部', value: 'all' },
  { label: '成功', value: 'successed' },
  { label: '失敗', value: 'failed' },
]
const LoginRadioPicker: React.FC = () => {
  return <RadioGroup label="是否成功登入" options={options} value="all" />
}

export default LoginRadioPicker
