import React from 'react';
import { Space } from 'antd';

const PageSearchBar: React.FC<{ extra?: React.ElementType }> = ({
  children,
  extra: Extra,
  ...props
}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Space size="small" {...props}>
        {children}
      </Space>
      {Extra && <Extra />}
    </div>
  );
};

export default PageSearchBar;
