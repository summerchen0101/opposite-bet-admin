import MultipleSelector from '@/components/MultipleSelector'
import { Checkbox, Space } from 'antd'
import React from 'react'

const options = [
  { label: 'aaaa(小白)', value: 'aaaa' },
  { label: 'gogoro(Gogo))', value: 'gogoro' },
]
const MemberActivity: React.FC = () => {
  const onChange = () => {}
  return (
    <Space>
      <MultipleSelector
        value={['aaaa', 'gogoro']}
        onChange={onChange}
        options={options}
        width="350px"
      />
      <Checkbox defaultChecked>全選</Checkbox>
    </Space>
  )
}

export default MemberActivity
