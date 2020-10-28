import React from 'react';
import { Button, Space } from 'antd';

const PageSearchBar: React.FC = (props) => {
  return (
    <Space size="small" {...props}>
      <Button>昨天</Button>
      <Button type="primary">今天</Button>
      <Button>明天</Button>
      <Button>上週</Button>
      <Button>本週</Button>
      <Button>上月</Button>
      <Button>本月</Button>
    </Space>
  );
};

export default PageSearchBar;
