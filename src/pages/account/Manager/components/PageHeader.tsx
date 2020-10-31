import React from 'react';
import PageHeader from '@/components/PageHeader';
import * as mPath from '@/lib/menuPath';
import { useIntl } from 'react-intl';

// const createLangCode = (id) => {
//   return intl.formatMessage({
//     id: 'breadcrumb.home',
//     defaultMessage: '首頁',
//   })
// }

const Component: React.FC = () => {
  const intl = useIntl();
  const routes = [
    {
      path: '/',
      breadcrumbName: intl.formatMessage({
        id: 'breadcrumb.home',
        defaultMessage: '首頁 default',
      }),
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
  return <PageHeader title="管理員管理" breadcrumb={{ routes }} />;
};

export default Component;
