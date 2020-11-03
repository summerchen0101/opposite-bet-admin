import { createSelector } from 'reselect';
import { IState, moduleName } from './reducer';

const selectModuleState = (state: { [moduleName]: IState }) =>
  state[moduleName];
const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
);
export const selectDisplayCreateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayCreateModal,
);
export const selectDisplayUpdateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayUpdateModal,
);
