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
import { addTab, removeTab } from '@/store/reducer';
import { online } from '@/routes';

const Online: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer('online', OnlineReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
    dispatch(removeTab(online.path));
    return () => {
      dispatch(addTab(online.getTab()));
    };
  }, []);
  return (
    <Dashboard>
      {/* <TabsRecord /> */}
      <PageHeader />
      <PageSearchBar>
        <RoleDropdown />
      </PageSearchBar>
      <TableData />
    </Dashboard>
  );
};

export default Online;
