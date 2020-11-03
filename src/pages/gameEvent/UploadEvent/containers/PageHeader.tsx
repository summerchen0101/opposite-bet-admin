import React from 'react';
import PageHeader from '@/components/PageHeader';
import { eventManager, eventScore } from '@/lib/routes';
const Component: React.FC<{ extra: React.ReactNode }> = ({ extra }) => {
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
      path: eventManager,
      breadcrumbName: '上架賽事',
    },
  ];
  return <PageHeader title="上架賽事" breadcrumb={{ routes }} extra={extra} />;
};

export default Component;
