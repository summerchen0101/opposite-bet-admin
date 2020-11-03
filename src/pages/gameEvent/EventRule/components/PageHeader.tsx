import React from 'react';
import PageHeader from '@/components/PageHeader';
import CreateButton from '../containers/CreateButton';
const Component: React.FC = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: '首頁',
    },
    {
      path: '',
      breadcrumbName: '賽事管理',
    },
    {
      path: '',
      breadcrumbName: '賽事規則',
    },
  ];
  return (
    <PageHeader
      title="賽事規則"
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  );
};

export default Component;
