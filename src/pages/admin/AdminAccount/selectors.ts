import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IState, moduleName } from './reducer'

interface IModuleState {
  [moduleName]: IState
}

export const useTypedSelector: TypedUseSelectorHook<IModuleState> = useSelector

const selectModuleState = (state: IModuleState) => state[moduleName]
export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
)
export const selectRoleOptions = createSelector(
  selectModuleState,
  (moduleState) => moduleState.roleOptions,
)
export const selectDisplayCreateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayCreateModal,
)

export const selectSearchData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.searchData,
)
export const selectSearchDataAccount = createSelector(
  selectSearchData,
  (searchData) => searchData.account,
)
export const selectSearchDataIp = createSelector(
  selectSearchData,
  (searchData) => searchData.ip,
)
export const selectSearchDataRole = createSelector(
  selectSearchData,
  (searchData) => searchData.role,
)
export const selectSearchDataStatus = createSelector(
  selectSearchData,
  (searchData) => searchData.status,
)
