import React from 'react';
import PageHeader from '@/components/PageHeader';
import * as mPath from '@/lib/menuPath';

const routes = [
  {
    path: '/',
    breadcrumbName: '首頁',
  },
  {
    path: '',
    breadcrumbName: '帳號管理',
  },
  {
    path: mPath.ACCOUNT_ONLINE,
    breadcrumbName: '在線人員',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="在線人員" breadcrumb={{ routes }} />;
};

export default Component;
