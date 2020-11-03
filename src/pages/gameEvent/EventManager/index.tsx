import Dashboard from '@/components/Dashboard';
import PageSearchBar from '@/components/PageSearchBar';
import RelativeDateBtns from '@/components/RelativeDateBtns';
import { eventManager } from '@/routes';
import { useReducerInjector, useTabRecord } from '@/utils/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DateRangePicker from '../../../components/DateRangePicker';
import CreateButton from './containers/CreateButton';
import PageHeader from './containers/PageHeader';
import PopupCreateForm from './containers/PopupCreateForm';
import PopupScoreForm from './containers/PopupScoreForm';
import TableData from './containers/TableData';
import reducer, { initSearchState, moduleName } from './reducer';

const Manager: React.FC = () => {
  useReducerInjector(moduleName, reducer);
  // useTabRecord(eventManager);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initSearchState());
  }, []);
  return (
    <Dashboard>
      <PageHeader />
      <PageSearchBar extra={<CreateButton />}>
        <DateRangePicker />
        <RelativeDateBtns />
      </PageSearchBar>
      <TableData />
      <PopupCreateForm />
      <PopupScoreForm />
    </Dashboard>
  );
};

export default Manager;
