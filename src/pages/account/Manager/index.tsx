import React, { useEffect, useReducer } from 'react';
import Dashboard from '@/components/Dashboard';
import PageHeader from './components/PageHeader';
import TableData from './components/TableData';
import RoleDropdown from './components/RoleDropdown';
import StatusDropdown from './components/StatusDropdown';
import KeywordInput from './components/KeywordInput';
import PageSearchBar from '@/components/PageSearchBar';
import { useDispatch, useStore } from 'react-redux';
import managerReducer, { initSearchState } from './reducer';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';
import CreateButton from './components/CreateButton';
import { StoreType } from '@/store';
import { addTab, removeTab } from '@/store/reducer';
import { manager } from '@/routes';

const Manager: React.FC = () => {
  const store: StoreType = useStore();
  store.injectReducer('manager', managerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
    dispatch(removeTab(manager.path));
    return () => {
      dispatch(addTab(manager.getTab()));
    };
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
