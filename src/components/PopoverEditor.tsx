import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Input, Popover, Select, Space } from 'antd'
import React, { useState } from 'react'

const PopoverEditorForm: React.FC<{
  setVisible: (value) => void
  value: any
  options?: any[]
}> = ({ setVisible, value, options }) => {
  const wrapper = (children) => (
    <Space>
      {children}
      <Button icon={<CloseOutlined />} onClick={() => setVisible(false)} />
      <Button
        type="primary"
        icon={<CheckOutlined />}
        onClick={() => setVisible(false)}
      />
    </Space>
  )

  if (options) {
    return wrapper(
      <Select
        defaultValue={value}
        options={options}
        style={{ minWidth: 100 }}
      />,
    )
  }

  return wrapper(<Input defaultValue={value} />)
}

interface PopoverEditorProps {
  value: any
  options?: any[]
}

const PopoverEditor: React.FC<PopoverEditorProps> = ({
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false)
  return (
    <Popover
      content={<PopoverEditorForm setVisible={setVisible} {...props} />}
      visible={visible}
      trigger="click"
      onVisibleChange={(value) => setVisible(value)}
    >
      {children}
    </Popover>
  )
}

export default PopoverEditor
