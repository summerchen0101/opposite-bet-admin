import { createSelector } from 'reselect';
import { OnlineState } from './reducer';

const selectModuleState = (state: { online: OnlineState }) => state.online;
const selectTableData = createSelector(
  selectModuleState,
  (online) => online.tableData,
);
export const selectRoleSearch = createSelector(
  selectModuleState,
  (online) => online.searchRole,
);
export const selectRoleOptions = createSelector(
  selectModuleState,
  (online) => online.roleOptions,
);

export const selectFilteredData = createSelector(
  [selectTableData, selectRoleSearch],
  (originList, role) => {
    return originList.filter((t) => !role || t.roleValue === role);
  },
);
