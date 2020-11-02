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
export const selectRoleSearch = createSelector(
  selectModuleState,
  (moduleState) => moduleState.searchRole,
);
export const selectStatusSearch = createSelector(
  selectModuleState,
  (moduleState) => moduleState.searchStatus,
);
export const selectRoleOptions = createSelector(
  selectModuleState,
  (moduleState) => moduleState.roleOptions,
);

export const selectFilteredData = createSelector(
  [selectTableData, selectRoleSearch, selectStatusSearch],
  (originList, role, status) => {
    return originList.filter((t) => {
      const arr = [
        !role || t.role === role,
        !status || t.stop === (status === 'off'),
      ];
      return arr.every((t) => !!t);
    });
  },
);
