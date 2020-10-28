import { createSelector } from 'reselect';
import { ManagerState } from './reducer';

const selectModuleState = (state: { manager: ManagerState }) => state.manager;
const selectTableData = createSelector(
  selectModuleState,
  (manager) => manager.tableData,
);
export const selectDisplayCreateModal = createSelector(
  selectModuleState,
  (manager) => manager.displayCreateModal,
);
export const selectDisplayUpdateModal = createSelector(
  selectModuleState,
  (manager) => manager.displayUpdateModal,
);
export const selectRoleSearch = createSelector(
  selectModuleState,
  (manager) => manager.searchRole,
);
export const selectStatusSearch = createSelector(
  selectModuleState,
  (manager) => manager.searchStatus,
);
export const selectRoleOptions = createSelector(
  selectModuleState,
  (manager) => manager.roleOptions,
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
