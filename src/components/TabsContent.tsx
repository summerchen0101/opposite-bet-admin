import React from 'react'
import { Button, Tabs } from 'antd'

interface TabsContentProps {
  onChange?: () => any
}

const TabsContent: React.FC<TabsContentProps> = ({ onChange, children }) => {
  return (
    <Tabs type="card" onChange={onChange}>
      {children}
    </Tabs>
  )
}

export default TabsContent
