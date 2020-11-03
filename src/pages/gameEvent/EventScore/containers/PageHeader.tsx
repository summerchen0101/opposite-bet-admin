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
      breadcrumbName: '賽事列表',
    },
    {
      path: eventScore,
      breadcrumbName: '比分',
    },
  ];
  return (
    <PageHeader
      title="美國 / NBA / 普羅森斯 VS 比勒菲爾德"
      breadcrumb={{ routes }}
      extra={extra}
    />
  );
};

export default Component;
