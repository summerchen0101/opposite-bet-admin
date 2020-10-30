import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './components/PageHeader';
import TableData from './components/TableData';
import RoleDropdown from './components/RoleDropdown';
import StatusDropdown from './components/StatusDropdown';
import KeywordInput from './components/KeywordInput';
import PageSearchBar from '@/components/PageSearchBar';
import { useDispatch, useStore } from 'react-redux';
import reducer, { initSearchState } from './reducer';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';
import CreateButton from './components/CreateButton';
import { manager } from '@/routes';
import { useReducerInjector, useTabRecord } from '@/utils/hooks';

const Manager: React.FC = () => {
  useReducerInjector('manager', reducer);
  useTabRecord(manager);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      {/* <TabsRecord /> */}
      <PageHeader />
      <PageSearchBar extra={CreateButton}>
        <RoleDropdown />
        <StatusDropdown />
        <KeywordInput />
      </PageSearchBar>
      <TableData />
      <CreateModal />
      <UpdateModal />
    </Dashboard>
  );
};

export default Manager;
