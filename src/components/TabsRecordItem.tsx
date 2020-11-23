import React, { useContext } from 'react'
import { Space, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import { IconLink } from '.'
import { useDispatch } from 'react-redux'
import { TabContext } from '@/contexts/TabContextProvider'

const TabRecordItemWrapper = styled.div<{ isCurrentTab: boolean }>`
  display: flex;
  align-items: center;
  line-height: 35px;
  padding: 0 10px;
  background-color: ${({ isCurrentTab }) =>
    isCurrentTab ? '#fff' : '#dfdfdf'};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: ${({ isCurrentTab }) => (isCurrentTab ? '#555' : '#999')};
  letter-spacing: 0.1em;
  cursor: ${({ isCurrentTab }) => (isCurrentTab ? 'auto' : 'pointer')};
  .close-icon {
    margin-bottom: -2px;
    margin-left: 5px;
  }
`

interface IProps {
  label: string
  path: string
  index: number
}
const TabsRecordItem: React.FC<IProps> = ({ label, path, index }) => {
  const history = useHistory()
  const location = useLocation()
  const { removeTab } = useContext(TabContext)
  const onClick = () => {
    history.push(path)
  }
  const onCloseTab = (e) => {
    removeTab(path)
    e.stopPropagation()
  }
  const isCurrentTab = path === location.pathname
  return (
    <TabRecordItemWrapper onClick={onClick} isCurrentTab={isCurrentTab}>
      {label}
      {!isCurrentTab && (
        <IconLink
          className="close-icon"
          icon={<CloseOutlined />}
          onClick={onCloseTab}
        />
      )}
    </TabRecordItemWrapper>
  )
}

export default TabsRecordItem
