import React from 'react';
import PageHeader from '@/components/PageHeader';
import { eventManager } from '@/routes';
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
      path: eventManager.path,
      breadcrumbName: '賽事列表',
    },
  ];
  return <PageHeader title="賽事列表" breadcrumb={{ routes }} />;
};

export default Component;
