import React from 'react';
import PageHeader from '@/components/PageHeader';
import * as mPath from '@/lib/menuPath';
import { useIntl } from 'react-intl';
import { useMessage } from '@/utils/hooks';
import { message } from 'antd';

// const createLangCode = (id) => {
//   return intl.formatMessage({
//     id: 'breadcrumb.home',
//     defaultMessage: '首頁',
//   })
// }

const Component: React.FC = () => {
  const intl = useIntl();
  const messages = useMessage();
  const routes = [
    {
      path: '/',
      breadcrumbName: messages['breadcrumb.home'],
    },
    {
      path: '',
      breadcrumbName: messages['breadcrumb.account'],
    },
    {
      path: mPath.ACCOUNT_MANAGER,
      breadcrumbName: messages['breadcrumb.account.manager'],
    },
  ];
  return (
    <PageHeader
      title={messages['breadcrumb.account.manager']}
      breadcrumb={{ routes }}
    />
  );
};

export default Component;
