import { clearTabs } from '@/store/reducer'
import { useTypedSelector } from '@/store/selectors'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import IconLink from './IconLink'
import TabsRecordItem from './TabsRecordItem'
const TabsRecordWrapper = styled.div`
  margin-top: 15px;
  height: 40px;
  .right-btns {
    float: right;
    line-height: 30px;
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
        <Button
          size="small"
          onClick={() => dispatch(clearTabs(location.pathname))}
        >
          清空頁籤
        </Button>
      </span>
    </TabsRecordWrapper>
  )
}

export default TabsRecord
