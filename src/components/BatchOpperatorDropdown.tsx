import { Dropdown, Menu, Popover, Tooltip } from 'antd'
import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import IconLink from './IconLink'
import { DownOutlined } from '@ant-design/icons'

interface MenuOption {
  label: string
  onClick: () => void
}
interface BatchOpperatorDropdownProps {
  style?: CSSProperties
  options: MenuOption[]
}

const createMenu = (options) => (
  <Menu>
    {options.map((opt: MenuOption, i) => (
      <Menu.Item key={i}>{opt.label}</Menu.Item>
    ))}
  </Menu>
)
const BatchOpperatorDropdown: React.FC<BatchOpperatorDropdownProps> = ({
  options,
  ...props
}) => {
  return (
    <Dropdown overlay={createMenu(options)} {...props}>
      <a className="link" onClick={(e) => e.preventDefault()}>
        操作(0)
        <DownOutlined />
      </a>
    </Dropdown>
  )
}

export default styled(BatchOpperatorDropdown)`
  color: #222;
  &:hover {
    color: #333;
  }
`
