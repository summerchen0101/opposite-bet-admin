import React, { useMemo } from 'react';
import { Space, Button } from 'antd';
import TabsRecordItem from './TabsRecordItem';
import { useTypedSelector } from '@/store/rootReducer';
const TabsRecord: React.FC = () => {
  const tabs = useTypedSelector((state) => state.global.tabs);
  return (
    <div>
      <Space>
        {tabs.map((tab) => (
          <TabsRecordItem key={tab.path} label={tab.label} path={tab.path} />
        ))}
      </Space>
    </div>
  );
};

export default TabsRecord;
