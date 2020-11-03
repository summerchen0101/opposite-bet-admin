import Dashboard from '@/components/Dashboard';
import { useReducerInjector } from '@/utils/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageHeader from './components/PageHeader';
import PopupCreateForm from './containers/PopupCreateForm';
import TableData from './containers/TableData';
import reducer, { initSearchState, moduleName } from './reducer';

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  );
};

export default Manager;
