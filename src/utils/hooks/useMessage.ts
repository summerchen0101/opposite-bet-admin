import { useIntl } from 'react-intl';

const useMessage = () => {
  const intl = useIntl();
  return {
    'breadcrumb.account.manager': intl.formatMessage({
      id: 'breadcrumb.account.manager',
      defaultMessage: '管理員管理',
    }),
    'breadcrumb.account': intl.formatMessage({
      id: 'breadcrumb.account',
      defaultMessage: '帳號管理',
    }),
    'breadcrumb.home': intl.formatMessage({
      id: 'breadcrumb.home',
      defaultMessage: '首頁',
    }),
  };
};

export default useMessage;
