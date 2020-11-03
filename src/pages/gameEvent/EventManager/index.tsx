import Dashboard from '@/components/Dashboard';
import PageSearchBar from '@/components/PageSearchBar';
import RelativeDateBtns from '@/components/RelativeDateBtns';
import { eventManager } from '@/routes';
import { useReducerInjector, useTabRecord } from '@/utils/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DateRangePicker from '../../../components/DateRangePicker';
import CreateButton from './components/CreateButton';
import PageHeader from './components/PageHeader';
import PopupCreateForm from './components/PopupCreateForm';
import TableData from './components/TableData';
import reducer, { initSearchState, moduleName } from './reducer';

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer);
  useTabRecord(eventManager);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar extra={CreateButton}>
        <DateRangePicker />
        <RelativeDateBtns />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
    </Dashboard>
  );
};

export default Manager;
