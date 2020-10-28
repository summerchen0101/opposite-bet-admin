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
    path: mPath.ACCOUNT_MANAGER,
    breadcrumbName: '管理員管理',
  },
];

const Component: React.FC = () => {
  return <PageHeader title="管理員管理" breadcrumb={{ routes }} />;
};

export default Component;
