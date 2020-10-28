import React, { useEffect } from 'react';
import Dashboard from '@/components/Dashboard';
import PageSearchBar from '@/components/PageSearchBar';
import TableData from './TableData';
import RoleDropdown from './RoleDropdown';
import PageHeader from './PageHeader';
import { useDispatch, useStore } from 'react-redux';
import { initSearchState } from '@/pages/account/Online/reducer';
import { StoreType } from '@/store';
import OnlineReducer from './reducer';

const Component: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer('online', OnlineReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar>
        <RoleDropdown />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  );
};

export default Component;
