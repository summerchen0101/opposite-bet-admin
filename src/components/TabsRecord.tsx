import { TabContext } from '@/contexts/TabContextProvider'
import { Button, Space } from 'antd'
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import TabsRecordItem from './TabsRecordItem'
const TabsRecordWrapper = styled.div`
  height: 35px;
  .ant-space {
    width: calc(100% - 90px);
    overflow-x: auto;
  }
  .right-btns {
    float: right;
    line-height: 30px;
  }
`
const TabsRecord: React.FC = () => {
  const { tabs, clearTabs } = useContext(TabContext)
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
        <Button size="small" onClick={() => clearTabs(location.pathname)}>
          清空頁籤
        </Button>
      </span>
    </TabsRecordWrapper>
  )
}

export default TabsRecord
