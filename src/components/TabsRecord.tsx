import { clearTabs } from '@/store/reducer'
import { useTypedSelector } from '@/store/rootReducer'
import { DeleteOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import IconLink from './IconLink'
import TabsRecordItem from './TabsRecordItem'
const TabsRecordWrapper = styled.div`
  margin-top: 15px;
  .right-btns {
    float: right;
    line-height: 30px;
    padding: 0 15px;
  }
`
const TabsRecord: React.FC = () => {
  const tabs = useTypedSelector((state) => state.global.tabs)
  const dispatch = useDispatch()
  const location = useLocation()
  return (
    <TabsRecordWrapper>
      <Space>
        {tabs.map((tab, index) => (
          <TabsRecordItem
            index={index}
            key={tab.path}
            label={tab.label}
            path={tab.path}
          />
        ))}
      </Space>
      <span className="right-btns">
        <IconLink
          icon={<DeleteOutlined />}
          label="清空頁籤"
          onClick={() => dispatch(clearTabs(location.pathname))}
        />
      </span>
    </TabsRecordWrapper>
  )
}

export default TabsRecord
