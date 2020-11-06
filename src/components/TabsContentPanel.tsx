import React from 'react'
import { Button, Tabs } from 'antd'
const { TabPane } = Tabs

interface TabsContentProps {
  content?: () => JSX.Element
  label: string
  code: string | number
}

const TabsContentPanel: React.FC<TabsContentProps> = ({
  content,
  label,
  code,
}) => {
  return (
    <TabPane tab={label} key={code}>
      {content}
    </TabPane>
  )
}

export default TabsContentPanel
