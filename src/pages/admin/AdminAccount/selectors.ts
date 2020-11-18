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
export const selectDisplayEditModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayEditModal,
)
export const selectEditAdmin = createSelector(
  selectModuleState,
  (moduleState) => moduleState.editAdmin,
)
