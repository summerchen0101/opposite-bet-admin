import React, { useEffect } from 'react';
import Dashboard from '@/components/Dashboard';
import PageSearchBar from '@/components/PageSearchBar';
import TableData from './TableData';
import RoleDropdown from './RoleDropdown';
import PageHeader from './PageHeader';
import { useDispatch, useStore } from 'react-redux';
import { initSearchState } from '@/pages/account/Online/reducer';
import reducer from './reducer';
import { online } from '@/routes';
import { useReducerInjector, useTabRecord } from '@/utils/hooks';

const Online: React.FC = () => {
  useReducerInjector('online', reducer);
  useTabRecord(online);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
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
